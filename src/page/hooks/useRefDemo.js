import  React ,{useRef,useState} from  'react'

function useRefDemo(){
    // const [value,setValue]=useState(null)
    const inputVal=useRef(null)
    const check=()=>{
        console.log('inputVal',inputVal.current.value);
        // inputVal.current.value='hello  world'
    }
    return(
        <>
            <p>
                <input ref={inputVal}/>
            </p>
            <button onClick={check}>+</button>
        </>
    )
}
export default useRefDemo



