import React from 'react';
import {View, PanResponder, StyleSheet} from 'react-native';
import Pen from '../tools/pen';
import Point from '../tools/point';
import Svg, {G, Path} from 'react-native-svg';

const gestureRecognizer = require('../tools/rubine.js');
let myGestureRecognizer = new gestureRecognizer();

export default class Recognizer extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			currentPoints: [],
			previousStrokes: this.props.strokes || [],
			newStroke: [],
			pen: new Pen(),
			gesture: ''
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

	// Write the current gesture class to the gestureClasses.json file
	exportGestureClass = () => {
		// console.log(this.state.gestureClassPoints);
		if (this.state.gestureClassPoints.length != 0) {
			const path = this.props.path + '/gestureClasses.json';
			RNFS.writeFile(path, JSON.stringify(this.state.gestureClassPoints), 'utf8')
				.then(success => {
					console.log('gestureClasses written!');
				})
				.catch(err => {
					console.log(err.message);
				});
	
			this.setState({
				gestureClassPoints: [],
			});
		}
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
				// stroke: this.props.color || '#000000',
				stroke: '#9b6ed69e', // added stroke will be a different color and partially transparent
				strokeWidth: this.props.strokeWidth || 4,
				fill: 'none',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			},
		};

		let currentGesture;
		let newShape;
		if (this.state.currentPoints.length > 3) {;
			currentGesture = myGestureRecognizer.classifyGesture(this.state.currentPoints);
			console.log(currentGesture);
			if (currentGesture === 'circle' ) {
				newShape = this.renderCircle();
			}
			else if (currentGesture === 'line') {
				newShape = this.renderLine();
			}
			else if (currentGesture === 'carat') {
				newShape = this.renderCaret();
			}
			else if (currentGesture === 'arch') {
				newShape = this.renderArch();
			}
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
		console.log(this.state.gestureClassPoints);
		return (
			<View>
				{/* The Original RN-Draw Component */}
				<View onLayout={this._onLayoutContainer} style={[styles.drawContainer, this.props.containerStyle]}>
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
	},
	svgContainer: {
		flex: 1,
	},
	drawSurface: {
		flex: 1,
	},
});

// import React from 'react'
// import {
//   View,
//   PanResponder,
//   StyleSheet,
//   Platform,
//   Image,
//   Button
// } from 'react-native'
// import {Svg} from '../config'
// const {
//   G, 
//   Surface, 
//   Path
// } = Svg

// const gestureRecognizer = require('../../../../testAlgorithm.js');
const gestureRecognizer = require('../tools/rubine.js');
let myGestureRecognizer = new gestureRecognizer();
// export default class Whiteboard extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       tracker: 0,
//       currentPoints: [],
//       previousStrokes: [],
//       newStroke: [],
//       pen: new Pen(),
//       gesture: '',
//       images: [],
//       shapes: []
//     }
//     this._panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: (evt, gs) => true,
//       onMoveShouldSetPanResponder: (evt, gs) => true,
//       onPanResponderGrant: (evt, gs) => this.onResponderGrant(evt, gs),
//       onPanResponderMove: (evt, gs) => this.onResponderMove(evt, gs),
//       onPanResponderRelease: (evt, gs) => this.onResponderRelease(evt, gs)
//     })
//     const rewind = props.rewind || function (){}
//     const clear = props.clear || function (){}
//     // const renderImage = props.renderImage || function(){}
//     this._clientEvents = {
//       rewind: rewind(this.rewind),
//       clear: clear(this.clear),
//       // renderImage: renderImage(),
//     }
    
//   }
//   rewind = () => {
//     if (this.state.currentPoints.length > 0 || this.state.previousStrokes.length < 1) return
//     let strokes = this.state.previousStrokes
//     strokes.pop()
//     this.state.pen.rewindStroke()
    
//     this.setState({
//       previousStrokes: [...strokes],
//       currentPoints: [],
//       tracker: this.state.tracker - 1,
//     })
//   }
//   clear = () => {
//     this.setState({
//       previousStrokes: [],
//       currentPoints: [],
//       newStroke: [],
//       tracker: 0,
//     })
//     this.state.pen.clear()
//   }
//   removeShape = () => {
//     let shapes = this.state.shapes;
//     shapes.splice(0, 1);
//     this.setState({
//       shapes: shapes,
//     });
//   }
//   renderCircle = () => {
//     return (
//         <Image
//           style={{width: 40, height: 40}}
//           source={require('../../../../assets/circle.png')}
//         />
//     )
//   }
//   renderLine = () => {
//     return (
//         <Image
//           style={{width: 40, height: 40}}
//           source={require('../../../../assets/line.png')}
//         />
//     )
//   }
//   renderCaret = () => {
//     return (
//         <Image
//           style={{width: 40, height: 40}}
//           source={require('../../../../assets/caret.jpg')}
//         />
//     )
//   }
//   renderArch = () => {
//     return (
//         <Image
//           style={{width: 40, height: 40}}
//           source={require('../../../../assets/arch.png')}
//         />
//     )
//   }
//   // componentDidMount() {
//   //   this.setTimeout(function() {
//   //     return (
//   //       <Image
//   //         style={{width: 40, height: 40}}
//   //         source={require('../../../../assets/hand.png')}
//   //       />
//   //       )
//   //   }, 10);
//   // }
//   onTouch(evt) {
//     let x, y, timestamp
//     [x, y, timestamp] = [evt.nativeEvent.locationX, evt.nativeEvent.locationY, evt.nativeEvent.timestamp]
//     let newPoint = new Point(x, y, timestamp)
//     let newCurrentPoints = this.state.currentPoints
//     newCurrentPoints.push(newPoint)
//     this.setState({
//       previousStrokes: this.state.previousStrokes,
//       currentPoints: newCurrentPoints,
//       tracker: this.state.tracker
//     })
//   }
//   onResponderGrant(evt) {
//     this.onTouch(evt);
//   }
//   onResponderMove(evt) {
//     this.onTouch(evt);
//   }
//   onResponderRelease() {
//     let strokes = this.state.previousStrokes
//     if (this.state.currentPoints.length < 1) return
//     let newElement = (
//       <Path
//         key={this.state.tracker}
//         d={this.state.pen.pointsToSvg(this.state.currentPoints)}
//         stroke={this.props.color || '#000000'}
//         strokeWidth={this.props.strokeWidth || 4}
//         fill="none"
//       />
//     )
//     let currentGesture;
//     let newShape;
//     if (this.state.currentPoints.length > 3) {
//           console.log("here!");
//           currentGesture = myGestureRecognizer.classifyGesture(this.state.currentPoints);
//           console.log(currentGesture);
//           if (currentGesture === 'circle' ) {
//             newShape = this.renderCircle();
//           }
//           else if (currentGesture === 'line') {
//             newShape = this.renderLine();
//           }
//           else if (currentGesture === 'carat') {
//             newShape = this.renderCaret();
//           }
//           else if (currentGesture === 'arch') {
//             newShape = this.renderArch();
//           }
//         }
//     this.state.pen.addStroke(this.state.currentPoints)
    
//     this.setState({
//       previousStrokes: [...this.state.previousStrokes, newElement],
//       currentPoints: [],
//       tracker: this.state.tracker + 1,
//       gesture: currentGesture,
//       shapes: [newShape, ...this.state.shapes]
//     })
//     this.clear();
//   }
//   _onLayoutContainer = (e) => {
//     this.state.pen.setOffset(e.nativeEvent.layout);
//   }
//   render() {
//     return (
//       <View
//         onLayout={this._onLayoutContainer}
//         style={[
//           styles.drawContainer,
//           this.props.containerStyle,
//         ]}>
//         <View style={styles.shapes}>  {this.state.shapes} </View>
//         <View style={styles.svgContainer} {...this._panResponder.panHandlers}>
//           <Svg style={styles.drawSurface}>
//             <G>
//               {this.state.previousStrokes}
//               <Path
//                 key={this.state.tracker}
//                 d={this.state.pen.pointsToSvg(this.state.currentPoints)}
//                 stroke={this.props.color || "#000000"}
//                 strokeWidth={this.props.strokeWidth || 4}
//                 fill="none"
//               />
//             </G>
//           </Svg>
//           {this.props.children}
//            <Button style={styles.button}
//           onPress={this.removeShape}
//           title="Undo"
//         />
//         </View>
       
//       </View>
//     )
//   }
// }
// let styles = StyleSheet.create({
//   drawContainer: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   svgContainer: {
//     flex: 4,
//   },
//   drawSurface: {
//     flex: 1,
//   },
//   shapes: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     position: 'absolute',
//     bottom: -50,
//     left: 0,
//   },
//   button: {
//     alignSelf: 'flex-end',
//     position: 'absolute',
//     bottom: -50,
//     left: 0,
//   }
// })

