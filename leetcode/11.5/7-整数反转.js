/*
 * @Author: your name
 * @Date: 2021-11-05 15:22:15
 * @LastEditTime: 2021-11-05 16:23:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /leetcode-learing/leetcode/11.5/7-整数反转.js
 */

// const reverse = x => {
//     let arr;
//     if (x > 0) {
//       arr = Number(String(x).split('').reverse().join(''));
//     } else {
//       const positiveNumber = Math.abs(x);
//       arr = -Number(String(positiveNumber).split('').reverse().join(''));
//     }
//     if (arr <= -(2 ** 31) || arr >= (2 ** 31 - 1)) {
//       arr = 0;
//     } 
//     return arr;
//   };

const reverse=(x)=>{
    let val
    if(val>0){
        val=x.reverse()
    }else{
        const opposite=Math.abs(x).reverse()
        val=-opposite
    }
    if(x<-2^31||x>2^31-1){
        x=0
    }
    return val
}

const answer=reverse(123)

console.log(answer);

