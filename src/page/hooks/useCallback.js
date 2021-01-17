import React, { useState,useEffect, useCallback } from 'react'

function  useCallbackDemo(){
    const [count,setCount]=useState(0)

    const handleResize=useCallback(()=>{
        console.log(`the count  is:${count}`);
    },[count])
    // const handleResize=()=>{
    //     console.log(`the count  is:${count}`);
    // }
    useEffect(()=>{
        window.addEventListener('resize',handleResize)
        return ()=>window.removeEventListener('resize',handleResize)
    },[handleResize])
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
    )
}

export default useCallbackDemo