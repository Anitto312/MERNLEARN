import { useCallback, useMemo, useState } from "react";


const UseCallback=()=>{
    var [number,setNumber]=useState(0);
    var [theme,setTheme]=useState(false);
    var Styling={
        backgroundColor:theme?"black":"white",
        color:theme?"white":"black"
    }
    var numList=useCallback((mul)=>{
        return [number*mul*2,number*mul*4,number*mul*8]
    })

    return(
        <>
        <div style={Styling}>
            <button onClick={()=>setTheme(!theme)}> change Theme</button>
            <h1>this is Usememo</h1>
            Number Box:{" "}
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <h2>This number list is{numList(100)}</h2>
            {numList(100).map((val,index)=>(
                <h2 key={index}>key={val}</h2>
            ))}
        </div>
        </>
    )
}
export default UseCallback;