/*
 * @Author: your name
 * @Date: 2020-12-27 17:51:39
 * @LastEditTime: 2020-12-27 18:15:46
 * @LastEditors: Please set LastEditors
 * @Description: 字符串反转
 * @FilePath: /react-hooks-practice/src/page/HOC/letterReverse/index.js
 */

import React, { Component } from 'react'
import WrappedReverse  from './wrappedReverse'



class LetterReverse extends Component {
	render() {
		return (
      <div>反转字符</div>        
		)
	}
}
export default WrappedReverse('boy')(LetterReverse) 
