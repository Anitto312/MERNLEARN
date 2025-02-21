const trackingMyButtonComp=(Component)=>{
    return(props)=>{
        const handleClick=()=>{
            alert("the traking info")
        }
        return(
            <>
                <form onClick={handleClick}>
                    Email: <input type="text" />
                    Password: <input type="text" />
                    <Component {...props}/>
                </form>
            </>

        )
    }
    
}
export default trackingMyButtonComp;