/*
 * @Author: your name
 * @Date: 2021-01-01 13:39:07
 * @LastEditTime: 2021-01-01 14:03:09
 * @LastEditors: Please set LastEditors
 * @Description: 下划线转驼峰
 * @FilePath: /react-hooks-practice/src/page/leetcode/demo6.js
 */

 const toCamelCaseVar=(str)=>{
    return  str.replace(str.slice(0,1),(a,b)=>{
        return a.toUpperCase()
    })
 }

const a='hello_world_dongbei'

// const a='hello'


console.log(toCamelCaseVar(a)); 