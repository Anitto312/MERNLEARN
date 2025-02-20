import { useEffect, useState } from "react"
const UseEffect = ()=>{
    var [text,setText] = useState("")
    useEffect(() => {
        console.log(text)
    })
    return(
        <section>
            <h1>This is use effect </h1>
        </section>
    )
}
export default UseEffect;