// 已知 array
const array = [
    {name: "wangqiang", city: "shanghai"},
    {name: "lilei", city: "shanghai"},
    {name: "chenhao", city: "hangzhou"},
    {name: "zhangqiang", city: "nanjing"},
];

// 用代码转化成如下 map
const map = {
    "shanghai": ["wangqiang", "lilei"],
    "hangzhou": ["chenhao"],
    "nanjing": ["zhangqiang"],
};


const  changeArray=(arr)=>{
    const  obj={};let newArr=[]
    arr.map((item,index)=>{
        obj[`${item.city}-${index}`]=item.name
        
    })
    console.log(obj);
    return obj
}
changeArray(array)


