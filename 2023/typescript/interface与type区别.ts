// interface example {
//     name: string
// }

// interface example{
//     age:number
// }

type  example={
    name:string
}
// interface  exampleFunc{
//     (name:string,age:number):void
// }


function  person(obj:example){
    console.log(obj);
}

let obj={name:'Sky',age:30}

person(obj)


// type可以定义 基本类型的别名，如 type myString = string
// type可以通过 typeof 操作符来定义，如 type myType = typeof someObj
// type可以申明 联合类型，如 type unionType = myType1 | myType2
// type可以申明 元组类型，如 type yuanzu = [myType1, myType2]


// interface可以合并声明,type不能合并声明


// type 可以声明基本类型别名，联合类型，元组等类型
// 基本类型别名
type Name = string

// 联合类型
// interface Dog {
//     wong();
// }
// interface Cat {
//     miao();
// }

// type Pet = Dog | Cat

// // 具体定义数组每个位置的类型
// type PetList = [Dog, Pet]

