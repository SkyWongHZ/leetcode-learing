/*
 * @Description  :  回文数
 * @Author       : Sky
 * @Date         : 2023-01-06 17:11:19
 */



const isPalindrome = function(num) {
    const  str  =num.toString().split('').reverse().join('')
    const  newNum=Number(str)
    const  isPalindromicNumber=num===newNum
    return  isPalindromicNumber
};

const res= isPalindrome(2332)
console.log('res: ', res);