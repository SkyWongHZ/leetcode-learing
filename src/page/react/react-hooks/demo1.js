import React, { useState, useEffect,useRef, Fragment } from 'react';

function App(params) {
    const [count,setCount]=useState(0)
    const timer=useRef()
    useEffect(() => {
        // effect
        // console.log('count:',count);
        // document.title=`you click ${count} 次`
        if(count<=10){
            timer.current=setInterval(() => {
                setCount(count+1)
            }, 1000);
        }
      
        return ()=>{
            clearInterval(timer.current)
        }
    } )
    const add = (params) => {
        setCount(count+1)
        
    }
    const substr = (params) => {
        setCount(count-1)
    }
    const  autoAdd=()=>{
        setInterval(() => {
            setCount(count+1)
        }, 1000);
    } 
   
    
    
    return(
        <Fragment>
            <div>计数器</div>
            <div>
            <p>{count}</p>
            <p><button onClick={add}>add</button> </p> 
            <p><button onClick={substr}>substr</button> </p> 
            </div>
        </Fragment>
    )
}

export default   App


