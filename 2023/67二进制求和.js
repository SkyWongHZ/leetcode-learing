/*
 * @Description  : 思路 先转十进制相加,再转二进制,不用parseInt是有精度溢出
 * @Author       : Sky
 * @Date         : 2023-03-04 11:25:37
 */
const  addBinary=(a,b)=>{
    const sum=(BigInt('0b'+a)+BigInt('0b'+b)).toString(2)
    return sum
}

const res=addBinary('1','10')
console.log(res);