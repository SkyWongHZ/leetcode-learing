function add(a,b){
    return a+b
}

const addCurry=curry(add)
const answer=addCurry(1)(2)
console.log(answer);