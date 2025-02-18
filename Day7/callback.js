// function Sjitclg(msg,abc){
//     console.log(msg);
//     abc()
// }

// function Callbackeg(){
//     console.log("welcome back");
// }

// Sjitclg("welcome",Callbackeg)


function formsub(msg,cbf){
    if(cbf()){
        console.log(msg);
    }
    else{
    console.log("unsuccess")
    }
}
function formvalid(){
    
    console.log("Form success validation")
    return true
}

formsub("submitted",formvalid)