/*
 * @Author: your name
 * @Date: 2020-12-27 18:00:19
 * @LastEditTime: 2020-12-27 18:15:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-hooks-practice/src/page/HOC/letterReverse/wrappedReverse.js
 */

import React, { Component } from 'react'

export default   (str)=> {
    console.log('str:',str);
	return(WrapComponent)=> class A extends Component {
		render() {
			return (
                <div>
                    <WrapComponent {...this.props}/>
                    <div>{str.split('').reverse().join('') }</div>
                </div>
                )
		}

	}
}






