function Home({props}){
    var styling={
        textAlign:"center",
        backgroundColor:"blue",
        color:"white"
    }
    var a=10;
    return(
        <div>
        <h1 style={styling}>Home Page</h1>
        <h2>Below tag is props</h2>
        <h3>props:{props}</h3>
        </div>
    );
}

export default Home;