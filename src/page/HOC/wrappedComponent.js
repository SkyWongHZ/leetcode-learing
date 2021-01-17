/*
 * @Author: your name
 * @Date: 2020-12-27 15:33:42
 * @LastEditTime: 2020-12-27 17:44:48
 * @LastEditors: Please set LastEditors
 * @Description: 代理方式的高阶组件
 * @FilePath: /react-hooks-practice/src/page/HOC/wrappedReverse.js
 */

import React, { Component } from 'react'

export default (title)=>  (WrappedComponent) => {
	return class A extends Component {
		state={
			value:'girl',
		}
		// refc(instance){
		// 	instance.getName&&alert(instance.getName())
		// }
		onChange=(e)=>{
			this.setState({value:e.target.value})
		}
		render() {
			const {title,...otherProps}=this.props
			const newProps={
				value:this.state.value,
				onChange:this.onChange
			}
			return (
				<div>
					<p>字符反转1 {title}</p>
					<WrappedComponent {...newProps} {...this.props} sex={'男'} name='sky' age='13'/>
				</div>

			)
		}
	}
}
