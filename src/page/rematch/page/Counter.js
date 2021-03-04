import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'

class Counter extends Component {
	constructor(props) {
		super(props)
		// this.state={
		// 	starCount:this.props.starCount,
		// }
	}
	componentDidMount(){
		 this.props.getStarCount()
	}
	// componentWillReceiveProps(nextProps){
	// 	this.props.getStarCount()
	// 	if(nextProps.starCount!==this.props.starCount){
	// 		this.setState({
	// 			starCount:nextProps.starCount
	// 		})
	// 	}
	// }
	render() {
		const {value,increment,substr,incrementAsync,reset,starCount}=this.props
		console.log('starCount:',starCount);
		// const {starCount}=this.state
		return (
			<div>
				<p>the count is {value}</p>
				<button onClick={increment}>increment</button>
				<button onClick={substr}>substr</button>

				<button onClick={incrementAsync}>异步加</button>
				<button onClick={reset}>复位</button>
				
				{/* <div>
					<button onClick={this.props.getStarCount}>获取start</button>
				</div> */}
				<div> {starCount}</div>
			</div>
		)
	}

}


const mapState = state => {
	console.log('starCount',state,state.mirror.starCount);
	return {
		value: state.count.value,
		starCount:state.mirror.starCount,
		
	}
}

const  mapDispatch=({count:{increment,substr,incrementAsync},mirror:{getStarCount,reset}})=>{
	return{
		increment,
		substr,
		incrementAsync,
		getStarCount,
		reset,
	}
}


// const  mapDispatchToProps=(dispatch)=>{
// 	return{
// 		substr:dispatch.count.substr,
// 		incrementAsync:dispatch.count.incrementAsync,
// 		reset:dispatch.mirror.reset,
// 	}
// }



const countContainer = connect(mapState,mapDispatch)(Counter)

export default countContainer



