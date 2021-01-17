/*
 * @Author: Sky
 * @Date: 2020-12-28 10:35:26
 * @LastEditTime: 2020-12-28 11:07:28
 * @LastEditors: Please set LastEditors
 * @Description: setState异步更新 同步更新理解
 * @FilePath: /react-hooks-practice/src/page/react/demo1.js
 */

import React, { Component } from 'react'


class Page extends Component {
	state = {
		count: 0
	}

	componentDidMount() {
		const buttonId=document.getElementById('buttonId')
		buttonId.addEventListener('click',this.addClick)
	}
	addClick = () => {
		// this.setState((prevState, props) => {
		// 	return { count: prevState.count + 1 }

		// })
		// console.log('this.state.count', this.state.count);
		// this.setState((prevState, props) => {
		// 	return { count: prevState.count + 1 }

		// })

		// console.log('this.state.count', this.state.count);
		// this.setState((prevState, props) => {
		// 	return { count: prevState.count + 1 }

		// })
		// console.log('this.state.count', this.state.count);



		this.setState({
			count:this.state.count+1
		})
		console.log('this.state.count', this.state.count);
		this.setState({
			count:this.state.count+1
		})

		console.log('this.state.count', this.state.count);
		this.setState({
			count:this.state.count+1
		})
		console.log('this.state.count', this.state.count);
	}
	render() {
		return (
			<div>
				<p>{this.props.title}</p>
				<button id='buttonId' >+</button>
			</div>
		)
	}
}

export default class FatherPage extends Component {
	render() {
		return (
			<div>
				<Page title='hello' />
			</div>
		)
	}
}



