/*
 * @Author: your name
 * @Date: 2020-12-27 13:00:27
 * @LastEditTime: 2020-12-27 15:11:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-hooks-practice/src/page/HOC/WrappedTitle.js
 */

import React, { Component } from 'react'

const  WrappedTitle=(Content) =>{
  return class A extends Component {
    render() {
      return (
        <div>
          <p>提示11</p>
          <p>x</p>
          <Content/>
        </div>

      )
    }
  }
}

export default WrappedTitle

