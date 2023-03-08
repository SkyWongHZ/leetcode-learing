/**
 * @description: Number会导致精度丢失,所以用bigInt
 * @param {*}
 * @return {*}
 * @author: Sky
 */

const  plusOne=(digits)=>{
    const  num=(BigInt(digits.join(''))+BigInt(1)).toString()
    const newDigits=num.split('').map(Number)
    return newDigits
}

const  digits=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
const  res=plusOne(digits)
console.log('res: ', res);