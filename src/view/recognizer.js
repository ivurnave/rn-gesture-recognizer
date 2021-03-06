import React from 'react';
import {View, PanResponder, StyleSheet} from 'react-native';
import Pen from '../tools/pen';
import Point from '../tools/point';
import Svg, {G, Path} from 'react-native-svg';

import gestureRecognizer from '../tools/rubine';

export default class Recognizer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPoints: [],
			previousStrokes: this.props.strokes || [],
			newStroke: [],
			pen: new Pen(),
			gesture: '',
			gestureClassPoints: [],
		};

		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gs) => true,
			onMoveShouldSetPanResponder: (evt, gs) => true,
			onPanResponderGrant: (evt, gs) => this.onResponderGrant(evt, gs),
			onPanResponderMove: (evt, gs) => this.onResponderMove(evt, gs),
			onPanResponderRelease: (evt, gs) => this.onResponderRelease(evt, gs),
		});
		const rewind = props.rewind || function() {};
		const clear = props.clear || function() {};
		this._clientEvents = {
			rewind: rewind(this.rewind),
			clear: clear(this.clear),
		};
	}

	componentDidMount() {
		var data = JSON.parse(this.props.trainingData);
		this.myGestureRecognizer = new gestureRecognizer(data);
	}

	componentWillReceiveProps(newProps) {
		if (
			this.props.strokes &&
			newProps.strokes &&
			JSON.stringify(this.props.strokes) !== JSON.stringify(newProps.strokes)
		) {
			this.setState({
				previousStrokes: newProps.strokes,
				newStroke: [],
			});
		}
	}

	// Undo the previous stroke, remove the last added gesture from the current gesture class
	rewind = () => {
		if (
			this.state.currentPoints.length > 0 ||
			this.state.previousStrokes.length < 1
		) {
			return;
		}
		let previousStrokes = this.state.previousStrokes;
		previousStrokes.pop();

		let gestureClassPoints = this.state.gestureClassPoints;
		gestureClassPoints.pop();

		this.state.pen.rewindStroke();

		this.setState(
			{
				gestureClassPoints,
				previousStrokes,
				currentPoints: [],
			},
			() => {
				this._onChangeStrokes([...previousStrokes]);
			},
		);
	};

	// Clear the pad, remove all gestures from the current gesture class
	clear = () => {
		this.setState(
			{
				previousStrokes: [],
				gestureClassPoints: [],
				currentPoints: [],
				newStroke: [],
			},
			() => {
				this._onChangeStrokes([]);
			},
		);

		this.state.pen.clear();
	};

	// Called on all touch events from the PanResponder
	onTouch(evt) {
		let x, y, timestamp;
		[x, y, timestamp] = [
			evt.nativeEvent.locationX,
			evt.nativeEvent.locationY,
			evt.nativeEvent.timestamp,
		];
		let newPoint = new Point(x, y, timestamp);
		let newCurrentPoints = this.state.currentPoints;
		newCurrentPoints.push(newPoint);

		this.setState({
			previousStrokes: this.state.previousStrokes,
			currentPoints: newCurrentPoints,
		});
	}

	onResponderGrant(evt) {
		this.onTouch(evt);
	}

	onResponderMove(evt) {
		this.onTouch(evt);
	}

	// update state with all data from the last gesture made
	onResponderRelease() {
		let points = this.state.currentPoints;

		if (points.length < 1) return;
		if (points.length === 1) {
			let p = points[0];
			let distance = parseInt(Math.sqrt(this.props.strokeWidth || 4) / 2);
			points.push(new Point(p.X + distance, p.Y + distance, p.time));
		}

		let newElement = {
			type: 'Path',
			attributes: {
				d: this.state.pen.pointsToSvg(points),
				stroke: this.props.color || '#9b6ed69e', // added stroke will be a different color and partially transparent
				strokeWidth: this.props.strokeWidth || 4,
				fill: 'none',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			},
		};

		let currentGesture;
		if (this.state.currentPoints.length > 3) {
			currentGesture = this.myGestureRecognizer.classifyGesture(this.state.currentPoints);
			this.props.recognitionHandler(currentGesture);
		}

		this.state.pen.addStroke(points);
		this.setState(
			{
				previousStrokes: [...this.state.previousStrokes, newElement],
				gestureClassPoints: [...this.state.gestureClassPoints, points],
				currentPoints: [],
				gesture: currentGesture,
			},
			() => {
				this._onChangeStrokes(this.state.previousStrokes);
			},
		);
		this.clear();
	}

	_onChangeStrokes = strokes => {
		if (this.props.onChangeStrokes) {
			this.props.onChangeStrokes(strokes);
		}
	};

	_onLayoutContainer = e => {
		this.state.pen.setOffset(e.nativeEvent.layout);
		this._layout = e.nativeEvent.layout;
	};

	_renderSvgElement = (e, tracker) => {
		if (e.type === 'Path') {
			return <Path {...e.attributes} key={tracker} />;
		}

		return null;
	};

	render() {
		return (
			<View style={{flex: 1, alignItems: 'stretch'}}>
				{/* The Original RN-Draw Component */}
				<View
					onLayout={this._onLayoutContainer}
					style={[styles.drawContainer, this.props.containerStyle]}
				>
					<View style={styles.svgContainer} {...this._panResponder.panHandlers}>
						<Svg style={styles.drawSurface}>
							<G>
								{this.state.previousStrokes.map((stroke, index) => {
									return this._renderSvgElement(stroke, index);
								})}
								<Path
									key={this.state.previousStrokes.length}
									d={this.state.pen.pointsToSvg(this.state.currentPoints)}
									stroke={this.props.color || '#000000'}
									strokeWidth={this.props.strokeWidth || 4}
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</G>
						</Svg>
						{this.props.children}
					</View>
				</View>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	drawContainer: {
		flex: 1,
		display: 'flex',
		backgroundColor: '#e0e4e5',
	},
	svgContainer: {
		flex: 1,
	},
	drawSurface: {
		flex: 1,
	},
});
