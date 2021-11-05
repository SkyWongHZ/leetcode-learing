/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// m行n列
const arr=[[1,2,3],[4,5,6]]
const  transpose = (matrix)=> {
    const m=matrix.length
    const n=matrix[0].length
    const  newArr=new  Array(n).fill(0).map(()=>new Array(m).fill(0))
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            newArr[j][i]=matrix[i][j]
        }
    }
    return newArr
};

const  b=transpose(arr)
console.log(b);