import { Link } from 'react-router-dom'
function Content(){
    var styling={
        textAlign:"center",
        backgroundColor:"white",
        color:"black"
    }
    return(
        <div>
        <h1>Content Page</h1>

        <li style={styling}><Link to='/Exam' style={styling}>EXAM RESULTS PROPS DRILLING</Link></li><br />
        </div>
    );
}

export default Content;