import React from 'react';

function Counter(){
    const [counter,setCounter] = React.useState(0);
    const handleIncrement=(val)=>{
        setCounter(counter+val)
    };
    const handleDouble=()=>{
        setCounter(counter*2)
    }
    const handleReset = ()=>{
        setCounter(0)
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={()=>{handleIncrement(1)}}>Increment</button>
            <button onClick={()=>handleIncrement(-1)}>Decrement</button>
            <button onClick={()=>handleDouble()}>Double</button>
            <button onClick={()=>handleReset()}>Reset</button>
        </div>
        
    )
}

export default  Counter;