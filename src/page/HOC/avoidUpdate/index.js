/*
 * @Author: your name
 * @Date: 2020-12-27 18:17:40
 * @LastEditTime: 2020-12-27 18:45:46
 * @LastEditors: Please set LastEditors
 * @Description: 高阶组件复用shouldComponentUodate
 * @FilePath: /react-hooks-practice/src/page/HOC/avoidUpdate/index.js
 */


import React, { Component } from 'react'
// import WrappedReverse  from './wrappedReverse'

const WrappedAvoidUpdate=(name)=>{
	return (WrappedComponent)=>class A extends Component{
		constructor(){
			super()
			this.state={
				count:0
			}
		}
		add=()=>{
			this.setState({count:this.state.count+1})
		}
		substr=()=>{
			this.setState({count:this.state.count-1})
		}
		shouldComponentUpdate(nextProps,nextState){
			console.log('nextProps',nextProps);
			console.log('nextState',nextState);
			if(nextProps.count!==this.props.count){
				return true
			}
			return false
		}
		render(){
			console.log('this.props',this.props);
			const nextProps={
				add:this.add,
				substr:this.substr,
				count:this.state.count,
			}
			return(
				<>
					<div>{name}</div>
					<WrappedComponent {...nextProps} {...this.props}/>
				</>
			
			)
		}
	}
}


class AvoidUpdate extends Component {
	
	render() { 
		console.log('this.props',this.props);
		const {add,substr,count}=this.props;
		return (
      	<div>
				<p>
					<button onClick={add}>+</button>
				</p>
				<p>
					<button onClick={substr} >-</button>
				</p>
				<p>{count}</p>
			</div>        
		)
	}
}
export default WrappedAvoidUpdate()(AvoidUpdate) 
