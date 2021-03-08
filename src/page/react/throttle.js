function Demo() {
    // const  debounce=(fn,delay)=>{
    //     let timer
    //     clearTimeout(timer)
    //     timer=setTimeout(()=>{
    //         fn()
    //     },delay)
    // }
    // function throttle(fn,delay){
    //     let timer
    //     return function(){
    //         const self=this
    //         if(timer){
    //             return
    //         }
    //         timer=setTimeout(function (params) {
    //             fn.apply(self,arguments)
    //             timer=null
    //         },delay)
    //     }
    // }

    function throttle(fn, delay) {
        let previous = 0
        return function () {
            const self = this
            const nowTime = new Date()
            if (nowTime - previous > delay) {
                fn.apply(self, arguments)
                previous = nowTime
            }

        }

    }

    function test() {
        console.log('test1');
    }


    return (
        <div>
            <button style={{ width: "100px" }} onMouseOver={throttle(test, 1000)}>节流</button>
        </div>
    )
}

export default Demo
