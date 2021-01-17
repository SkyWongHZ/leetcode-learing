/*
 * @Author: your name
 * @Date: 2020-12-29 15:23:43
 * @LastEditTime: 2020-12-29 17:35:53
 * @LastEditors: Please set LastEditors
 * @Description: react新生命周期
 * @FilePath: /react-hooks-practice/src/page/react/dem3.js
 */

import React, { Component } from 'react'
class Page extends Component {
	static getDerivedStateFromProps(props, state) {
	
		if (state.prevPropsCount !== props.number) {
			console.log('getDerivedStateFromProps', props, state);
			return {
				count: props.number,
				prevPropsCount:props.number,

			}
		}
	
		return null
	}
	constructor(props) {
		super(props)
		this.state = {
			count: 1000,
			inputVal: '',
			prevPropsCount:null,
		}
	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	shouldComponentUpdate(nextProps, nextStates) {
		console.log('shouldComponentUpdate');
		return true
	}
	getSnapshotBeforeUpdate(prevProps, PrevStates) {
		console.log('getSnapshotBeforeUpdate', prevProps, PrevStates);
		return true

	}
	componentDidUpdate(prevProps, PrevStates) {
		console.log('componentDidUpdate',prevProps,this.props);
		if(this.props.number===103){
			alert('恭喜')
		}
	}

	componentWillUnmount() {
		console.log('componentDidUpdate');
	}
	addClick = () => {
		const count = this.state.count + 1
		this.setState({ count })
	}
	onChange = (e) => {
		this.setState({
			inputVal: e.target.value
		})
	}
	render() {
		console.log('render');
		return (
			<>
				<p>子组件获取的父组件参数 父组件传入的值{this.props.number}  子组件的数值{this.state.count} ----  {this.props.name}</p>
				<div>
					<button onClick={this.addClick}>+</button>
					{/* <p>{this.state.count}</p> */}
				</div>

				<input type='text' value={this.state.inputVal} onChange={this.onChange} />
			</>

		)
	}

}

export default class FatherPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			num: 100,
			name: ''
		}
	}
	addClick = () => {
		const num = this.state.num + 1
		this.setState({
			num
		})
	}
	nameChange = (e) => {
		this.setState({ name: e.target.value })
	}
	render() {
		return (
			<div>
				<Page number={this.state.num} name={this.state.name} />
				<p>
					父组件相关:{this.state.num}
					<button onClick={this.addClick}>加</button>
					<input value={this.state.name} onChange={this.nameChange} />
				</p>

			</div>
		)
	}
}
