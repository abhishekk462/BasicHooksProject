import React,{useState} from 'react'

const HookCounter = () =>{

     const [count,setCount] = useState(0)
     console.log('count111', count)
     console.log('setCount111', setCount)
   return(
   <div>
       Hooks
   <button onClick = {() =>setCount(count+1)}>COUNT{count}</button>
   </div>
     
   )
} 
export default HookCounter