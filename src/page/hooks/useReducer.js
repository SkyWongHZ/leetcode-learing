import React, { useState,useReducer }  from  'react'

function  reducer(state,action){
    switch(action.type){
        case 'increment':
            console.log('count',state.count);;
            return{count:state.count+1}
        case  'decrement':
            return {count:state.count-1}
    }
        
}

function Counter(){
    const initValue={count:1}
    const [state,dispatch]=useReducer(reducer,initValue)
    return(
        <div>
            <p>{state.count}</p>
            <buttton onClick={()=>dispatch({type:'increment'})}> +</buttton>
            <buttton onClick={()=>dispatch({type:'decrement'})}> -</buttton>
        </div>
    )
}

export default Counter