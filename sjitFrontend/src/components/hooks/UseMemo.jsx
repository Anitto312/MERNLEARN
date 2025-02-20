import { useMemo, useState } from "react";

function doublingUpNumber(num){
    return num*2
}
function slowfunction(num){
    for(var i=0;i<100000;i++){
        console.log(i);
    }
    return num*2
}


const UseMemo=()=>{
    var [number,setNumber]=useState(0);
    var [theme,setTheme]=useState(false);
    var Styling={
        backgroundColor:theme?"black":"white",
        color:theme?"white":"black"
    }
    return(
        <>
        <div style={Styling}>
            <button onClick={()=>setTheme(!theme)}> change Theme</button>
            <h1>this is Usememo</h1>
            Number Box:{" "}
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <h2>The number is :{number}</h2>
            <h2>The number is :{slowfunction(number)}</h2>
        </div>
        </>
    )
}
export default UseMemo;