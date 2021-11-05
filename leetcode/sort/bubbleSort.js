// 冒泡排序解题思路
//  1 单次循环找到当前趟的最大值
//  2 长度为n的话总共要循环n-1次
//  3 性能优化

const arr=[1,33,44,6,65,6,9,32,12]

const  bubbleSort=(arr)=>{
    for(let j=0;j<arr.length-1;j++){
        let done=true;
        for(let i=0;i<arr.length-1-j;i++){
            let compare;
            if(arr[i]>arr[i+1]){
                compare=arr[i+1]
                arr[i+1]=arr[i]
                arr[i]=compare
                // [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                done=false;
            }
        }
        if(done) {break};
    }
    console.log('arr',arr);
    return arr
}

bubbleSort(arr)


