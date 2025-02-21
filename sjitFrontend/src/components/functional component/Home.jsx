import { Link } from 'react-router-dom'
function Home({props}){
    var styling={
        textAlign:"center",
        backgroundColor:"white",
        color:"black"
    }
    var a=10;
    return(
        <div>
        <h1 style={styling}>Home Page</h1>
        <li style={styling}><Link to='/use-Effect-API' style={styling}>API</Link></li><br />
        <li style={styling}><Link to='/use-Ref' style={styling}>UseRef</Link></li><br />
        <li style={styling}><Link to='/use-Memo' style={styling}>UseMemo</Link></li><br />
        <li style={styling}><Link to='/use-Callback' style={styling}>UseCallback</Link></li><br />
        <li style={styling}><Link to='/use-Memoise' style={styling}>UseMemoise</Link></li><br />
        <li style={styling}><Link to='/HoC' style={styling}>HOC</Link></li><br />
        <h2>Below tag is props</h2>
        <h3>props:{props}</h3>
        </div>
    );
}

export default Home;