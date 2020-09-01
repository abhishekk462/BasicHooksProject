import React, {useState} from 'react'


const ResetHookCounter = () => {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

   const incrementFive =()=>{
         for(let i=0; i<5; i++){
             setCount(prevCount => prevCount + 1)
             
            
         }
    }

    return(
        <div>
            <h3>Hooks Increment,dec,reset</h3>
            Count: {count}
            {/* All are unsafe */}
            {/* <button onClick = {() => setCount(initialCount)}>Reset</button>
            <button onClick = {() => setCount(count + 1)}>Increment</button>
            <button onClick = {() => setCount(count -1)}>Decrment</button> */}
            {/* For safe */}
            <button onClick = {incrementFive}>Increment 5</button>
            <button onClick = {() => setCount(initialCount)}>Reset</button>
            <button onClick = {() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick = {() => setCount(prevCount => prevCount -1)}>Decrment</button>
        </div>
    )

}

export default ResetHookCounter