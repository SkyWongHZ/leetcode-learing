/*
 * @Author: your name
 * @Date: 2021-01-01 13:09:49
 * @LastEditTime: 2021-01-01 13:13:58
 * @LastEditors: Please set LastEditors
 * @Description: 完成将 toChineseNum， 可以将数字转换成中文大写的表示，处理到万级别，
 * 例如 toChineseNum(12345)，返回 一万二千三百四十五
 * @FilePath: /react-hooks-practice/src/page/leetcode/demo5.js
 */


//  const toChineseNum=(str)=>{

//  }


function toChineseNum(num) {
    num += ''
    let numLength = num.length
    let numStr = '零一二三四五六七八九十'
    let unitArr = ['', '十', '百', '千', '万']
    function getResult(str) {
      let res = '';
      if (str.length > 5) {
        let first = str.slice(-5);
        let second = str.slice(0, str.length - 5);
        for (let i in second) {
          res = res + numStr[second[i]] + unitArr[second.length - i];
        }
        for (let i in first) {
          res = res + numStr[first[i]] + unitArr[first.length - i - 1];
        }
      } else {
        let first = str.slice(-5);
        for (let i in first) {
          res = res + numStr[first[i]] + unitArr[first.length - i - 1];
        }
      }
      res = res.replace(/零[零十百千]+/g, '零').replace(/零+$/g, '').replace(/零万/g, '万')
      return res;
    }
    
    if (numLength > 8) {
      return getResult(num.slice(0, numLength - 8)) + '亿' + getResult(num.slice(-8))
    } 
    return getResult(num)
  }
  
  console.log(toChineseNum(1000005600454456))
  
  