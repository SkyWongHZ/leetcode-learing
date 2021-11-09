/*
 * @Author: your name
 * @Date: 2021-01-01 14:48:33
 * @LastEditTime: 2021-01-01 14:56:19
 * @LastEditors: Please set LastEditors
 * @FilePath: /react-hooks-practice/src/page/leetcode/demo8.js
 */

// 1. 大于2的正数
// 1.1  2,3
// 1.2  偶数肯定不是
// 1.3  >3的奇数  且不能被3+(2*n)整除或者自身平方根除尽

const isPrimeNumber=(num)=>{
    if (typeof num!=='number' ) return  new TypeError('num should be number')
    if(num===2||num===3) return true
    if(num%2===0) return false
    while (num) {
        
    }
}
 