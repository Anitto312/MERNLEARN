import { createContext } from "react";
import StudentResults from "./StudentResults";
export const ResultPublish=createContext();
const CoE=(res)=>{
    return(
        <div>
            <h1>Result Publish:</h1>
            <StudentResults cgpa="10" sgpa="10"/>
        </div>
    )
}
export default CoE;