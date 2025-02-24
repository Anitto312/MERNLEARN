import { useContext } from "react";
// import


const StudentResults=(res)=>{
    const result=useContext(ResultPublish)
    return(
        <div>
            <h1>Result:{res.cgpa}</h1>
            <h2>SGPA:{res.sgpa}</h2>
        </div>
    )
}
export default StudentResults;