/*
 * @Author: your name
 * @Date: 2020-12-27 14:46:32
 * @LastEditTime: 2020-12-27 17:42:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-hooks-practice/src/page/HOC/containerA.js
 */
import React, { Component } from 'react'
import WrappedReverse  from './wrappedReverse'

class ContainerA extends Component {
	
	render() {
		return (
			<div>
				<p>我的名字是:{this.props.name}</p>
				<p>我的年龄是:{this.props.age}</p>
				<input type="text" {...this.props}/>
			</div>
		)
	}
}

export default  WrappedReverse({title:'hello world'})(ContainerA)

