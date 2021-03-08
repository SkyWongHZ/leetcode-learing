function Demo() {
    // const  debounce=(fn,delay)=>{
    //     let timer
    //     clearTimeout(timer)
    //     timer=setTimeout(()=>{
    //         fn()
    //     },delay)
    // }
    function debounce(fn,delay){
        let timer
        return function(){
            const self=this
            if(timer){
                clearTimeout(timer)
            }
            timer=setTimeout(function (params) {
                fn.apply(self,arguments)
            },delay)
        }
    }
    
    function  testDebounce(){
        console.log('test1');
    }
    
    // document.onmouseover=()=>{
    //     debounce(testDebounce,1000)
    // }
    
    return (
        <div>
            <button  style={{width:'100px'}} onMouseOver={debounce(testDebounce,1000)}>防抖</button>
        </div>
    )
}

export default Demo
