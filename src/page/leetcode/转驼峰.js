function  convert(object){
    for(let key in object){
        if(typeof object[key]!=='object'){
            // const  keyStr=object[key]
            toHump(key)
        }else{
            convert(object[key])
        }
    }
}




function toHump(name) {
    console.log(22222,name);
    return name.replace(/\_(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}
// let a = 'a_bc_def';
// console.log(toHump(a));


const keyStr=convert ({'a_bc_def':1})
console.log('keyStr',keyStr);

// convert({'a_bc_def':{'foo_bar':2}})

// convert({'a_bc_def':[{'foo_bar':2},{'goo_xyz':3}]})