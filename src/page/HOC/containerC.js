/*
 * @Author: your name
 * @Date: 2020-12-27 14:46:32
 * @LastEditTime: 2020-12-27 17:33:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-hooks-practice/src/page/HOC/containerA.js
 */
import React, { Component } from 'react'
import WrappedReverse  from './wrappedReverse'

class ContainerC extends Component {
    getName(){
        return '我是C组件'
    }
	// render() {
	// 	return (
	// 		<div>
	// 			<p>我的名字是:{this.props.name}</p>
	// 			<p>我的年龄是:{this.props.age}</p>
	// 		</div>
	// 	)
    // }
    render(){
        return null
    }
}

export default  WrappedReverse()(ContainerC) 

