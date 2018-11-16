import React from 'react'
import {
	AppRegistry,
	StyleSheet,
	Component,
	Text,
	View,
	Image,
	PanResponder,
	Animated,
	Platform,
	Button,
} from 'react-native'
import RNDraw from 'rn-draw'

function Point(x, y) // constructor
{
	this.X = x;
	this.Y = y;
}

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			pan: new Animated.ValueXY(),
			scale: new Animated.Value(1),
			locationX: 0, // either locationX or x will be gotten rid of later as we don't need to display the values at bottom
			locationY: 0,
			coordinates: [],
			coordinates2: [],
			gesture: ''
		}
	}

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onMoveShouldSetResponderCapture: () => true,

			onMoveShouldSetPanResponderCapture: () => true,

			onPanResponderGrant: (e, gestureState) => {
				this.setState({
					locationX: this.state.pan.x._value.toFixed(3),
					locationY: this.state.pan.y._value.toFixed(3),
				})

				this.state.pan.setOffset({
					x: this.state.pan.x._value,
					y: this.state.pan.y._value,
				})
				this.state.pan.setValue({x: 0, y: 0})
				Animated.spring(this.state.scale, {toValue: 1.1, friction: 3}).start()
			},

			onPanResponderMove: (e, gestureState) => {
				oldX = this.state.locationX
				oldY = this.state.locationY

				newX = this.state.pan.x._value.toFixed()
				newY = this.state.pan.y._value.toFixed()

				if (newX != oldX || newY != oldY) {
					this.setState({
						locationX: newX,
						locationY: newY,
						coordinates: [
							...this.state.coordinates,
							new Point(parseInt(newX), parseInt(newY)),
						],						
						coordinates2: [
							...this.state.coordinates2,
							[parseInt(newX), parseInt(newY)],
						],
					})
				}

				Animated.event([null, {dx: this.state.pan.x, dy: this.state.pan.y}])(
					e,
					gestureState,
				)
			},

			onPanResponderRelease: (e, {vx, vy}) => {
				if (this.state.coordinates.length > 3) {
					this.state.gesture = myGestureRecognizer.classifyGesture(this.state.coordinates);
					console.log(this.state.gesture);
				}

				this.setState({
					locationX: 0,
					locationY: 0,
					coordinates: [],
					coordinates2: [],
				})

				this.state.pan.flattenOffset()
				Animated.spring(this.state.scale, {toValue: 1, friction: 3}).start()
			},
		})
	}

	  clear=()=>{
    this._clear()
  }

  rewind=()=>{
    this._undo()
  }

	render() {
		let {pan, scale} = this.state
		let rotate = '0deg'
		let [translateX, translateY] = [pan.x, pan.y]
		let imageStyle = {
			transform: [{translateX}, {translateY}, {rotate}, {scale}],
		}

		return (
		<View style={styles.container}>
		
					<RNDraw
							strokes={[]}
							containerStyle={{backgroundColor: 'rgba(0,0,0,0.01)'}}
							rewind={(undo) => {this._undo = undo}}
							clear={(clear) => {this._clear = clear}}
							color={'#000000'}
							strokeWidth={4}
							onChangeStrokes={(strokes) => console.log(strokes)}
						/>

        </View>
			

		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},


  	button: {
    	flexDirection: 'row',
    	justifyContent: 'space-between'
  	},

	label: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		padding: 20,
		backgroundColor: 'rgba(0,0,0,0.7)',
		textAlign: 'center',
	},

	canvasView: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
