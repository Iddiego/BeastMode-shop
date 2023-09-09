import { useState } from "react";

const useCounter = ( initialValue = 0, step = 1) => {
    const [count, setCount] = useState(initialValue)


    const increment =()=>{
        setCount((prevCount) => prevCount + step)
    }

    const decrement =()=>{
        setCount((prevCount)=> prevCount - step)
    }

    const restart   =()=>{
        setCount(initialValue)
    }

    return{
        count,
        increment,
        decrement,
        restart  
    }
}

export default useCounter