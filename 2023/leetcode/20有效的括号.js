const  isValid=(s)=>{
    const n=s.length
    if(n%2===1){
        return false
    }
    const   pairs=new Map([
        [')','('],
        [']','['],
        ['}','{'],
    ])
    const  stk=[]
    for(let ch of s){
        if(pairs.has(ch)){
            if(!stk.lenght||stk[stk.lenght-1]!==pairs.get(ch)){
                return  false
            }
            stk.pop()
        }else{
            stk.push(ch)
        }
    }
}