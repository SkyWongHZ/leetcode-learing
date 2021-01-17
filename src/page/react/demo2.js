/*
 * @Author: Sky
 * @Date: 2020-12-28 17:44:03
 * @LastEditTime: 2020-12-29 14:57:25
 * @LastEditors: Please set LastEditors
 * @Description: protoType  defaultProps的使用
 * @FilePath: /react-hooks-practice/src/page/react/demo2.js
 */

 import React,{Component} from 'react'
 import PropTypes  from 'prop-types'

 export default class Page extends Component{
     static propTypes={
         count:PropTypes.string,
		 }
		//  static defaultProps={
		// 	 count:'a'
		//  }

		 
		 
		 
    //  constructor(props){
		// 			super(props)
		// 			this.state={
		// 				// count:1
		// 			}
    //  }
     render(){
         return(
             <>
                <p>{this.state.count}</p>
             </>
         )
     }
 }
 Page.defaultProps={
	 count:2
 }