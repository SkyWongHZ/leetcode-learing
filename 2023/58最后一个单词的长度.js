const  lengthOfLastWorld=(s)=>{
    const  arr=s.trim().split(' ')
    const  lastIndex=arr[arr.length-1].length
    return lastIndex
}

const  s = "" 
const  res=lengthOfLastWorld(s)
console.log('res: ', res);


