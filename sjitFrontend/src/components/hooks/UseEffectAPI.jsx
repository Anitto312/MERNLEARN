import { useState,useEffect } from "react"
import axios from 'axios'
const UseEffectAPI=()=>{
    var [post,setPost]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>setPost(res.data)).catch((err)=>console.log("Couldnt   "));
    },[])
    return (
        <div>
            <h1>this is api</h1>
            <ol>
                {post.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ol>
        </div>
    )
}
export default UseEffectAPI;