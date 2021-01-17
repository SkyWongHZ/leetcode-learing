/*
 * @Author: Sky
 * @Date: 2020-12-25 16:39:41
 * @LastEditTime: 2020-12-26 15:30:59
 * @LastEditors: Please set LastEditors
 * @Description: hooks模拟生命周期
 * @FilePath: /react-hooks-practice/src/page/hooks/lifeCycle.js
 */


import React, { Component, useEffect, useRef, useState } from 'react'

// export default class LifeCycleDemo extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			name: 'react hooks',
// 			count:1,
// 		}
// 	}
// 	componentDidMount() {
// 		console.log('mounted');
// 	}
// 	// shouldComponentUpdate(nextProps, nextStates) {
// 	// 	console.log('shouldComponentUpdate');
// 	// 	if(nextStates.count===3){
// 	// 		return false
// 	// 	}
// 	// 	return true

// 	// }
// 	componentDidUpdate(){
// 		console.log('didUpdate');
// 	}
// 	add=()=>{

// 		this.setState({
// 			count:this.state.count+1
// 		})
// 	}
// 	render() {
// 		console.log('render');
// 		return (
// 			<>
// 				<div>{this.state.name}</div>
// 				<div>
// 					<button onClick={this.add}>+</button>
// 					{this.state.count}
// 				</div>
// 			</>
// 		)
// 	}
// }

//  模拟constructor
// function LifeCycleDemo(){
//     const [name,setName]=useState('react hooks')
//     return <div>{name}</div>
// }

// 模拟componentdidMount
// function LifeCycleDemo(){
//     useEffect(()=>{
//         console.log('mounted');
//     },[])
//     return null
// }

// 模拟shouldComponentUpdate
// function LifeCycleDemo(props) {
// 	const [count, setCount] = useState(0)
// 	const [name,setName]=useState('react hooks')
// 	const add=()=>{
// 		setCount(count+1)
// 	}
// 	return (
// 		<>
// 			<div>{name}</div>
// 			<div>
// 				<button onClick={add}>+</button>
// 				{count}
// 			</div>
// 		</>
// 	)
// }
// function areEquals(prevProps,nextProps){
// 	console.log(`prevProps:${prevProps}`);
// 	console.log(`nextProps:${nextProps}`);
// }

// export default React.memo(LifeCycleDemo,areEquals) 

// 只模拟componentDidUpdate
// function LifeCycleDemo(params) {
// 	const [count, setCount] = useState(0)
// 	const mounted=useRef()
// 	useEffect(() => {
// 		// console.log('mounted',mounted);
// 		if(!mounted.current){
// 			mounted.current=true
// 			console.log('didMount');

// 		}else{
// 			console.log('didUpdate');
// 		}
// 	})
// 	const add = () => {
// 		setCount(count + 1)
// 	}
	
// 	return (
// 		<>
// 			<div>
// 				<button onClick={add}>+</button>
// 				{count}
// 			</div>
// 		</>
// 	)
// }

// 模拟componentwillUnmount
function LifeCycleDemo(params) {
	const [time,setTime]=useState(new Date().getTime())
	useEffect(()=>{
		const timer=setInterval(()=>{
			setTime(new Date().getTime())
		},1000)
		return ()=>clearInterval(timer)
	},[])
	return(
		<div>
			<div>{time}</div>
			<div>hello world</div>
		</div>
		
	)
}
export default LifeCycleDemo


