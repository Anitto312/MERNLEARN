import { useState } from "react";

function UseState(){
    var stateVar=0;
    var [num,setNum]=useState(stateVar)
    var [content,setText]=useState("")
    function decrement(){
        setNum(num-1);
    }
    return(
        <div>

        <h1>About Page</h1>

        <h2>state initial value is {stateVar}</h2>
        <button onClick={decrement}>-</button>
        <h3>Updating state:{num}</h3>
        <button onClick={()=>{setNum(num+1)}}>+</button><br />
        <button onClick={()=>{setNum(stateVar)}}>reset</button>
        <input type="text" value={content} placeholder="Typehere" onChange={(e)=>setText(e.target.value)}/>
        <h3>text is:{content}</h3>
        </div>
        );
}

export default UseState;