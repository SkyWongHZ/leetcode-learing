function quickSort(arr) {
    if(arr.length<=1) return arr
    const pivotIndex=Math.floor(arr.length/2)
    const pivot=arr.splice(pivotIndex,1)[0]
    const left=[],right=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot],quickSort(right))
}

const arr=[1,2,2,3,4,54,43,2322,5,555,777,43,6444,3]


const max=quickSort(arr)
console.log(max,`time:${new Date().getTime()}`);