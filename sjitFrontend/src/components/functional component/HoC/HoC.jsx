import Button from "./Button"
import trackingMyButtonComp from "./trackingMyButtonComp"
const HoC = ()=>{
    const ButtonTrack=trackingMyButtonComp(Button)
    return(
        <div>
            <h1>welcome to higher order component</h1>
            <Button value={"Login"}/>
            <ButtonTrack value={"Login"} trackingInfo={{"CustID":"Hello","password":"password"}}></ButtonTrack>
        </div>
    )
}
export default HoC