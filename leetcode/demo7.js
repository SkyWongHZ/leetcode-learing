/*
 * @Author: your name
 * @Date: 2021-01-01 14:15:26
 * @LastEditTime: 2021-01-01 14:48:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-hooks-practice/src/page/leetcode/demo7.js
 */

function ObserverableArray (){
    return new Proxy([],{
        get(target,propsKey){
					const  matArr = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
					matArr.indexOf(propsKey)>-1&&console.log(propsKey);
					return target[propsKey]
        }
    })
}

const arr=new ObserverableArray()
arr.push('Good')

arr.pop('People')
console.log(arr);




