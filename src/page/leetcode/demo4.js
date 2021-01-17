// 千分位转换实现

const  num=12345.6789

const toThousands=(num)=>{
    let [a,b]=String(num).split('.')
    console.log(a);
    
}

const f1=(a)=>{
    let newStr,ret
    if(a.length<3){
        return a
    }
    if((a.length%3)!==0){
        newStr='0'.repeat(3-a.length%3)+a
    }else{
        newStr=a
    }
    const arr=newStr.split('')
    console.log('arr',arr);
    const newArr=arr.map((item,index)=>{
        if((index+1)%3===0&&index!==arr.length-1){
            return item=item+','
        }else{
            return item
        }
    }).join('')
    console.log('newArr',newArr);
}

// toThousands(num)
f1('12345')
// console.log('answer',answer);