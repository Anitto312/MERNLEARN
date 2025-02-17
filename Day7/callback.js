function Sjitclg(msg,abc){
    console.log(msg);
    abc()
}

function Callbackeg(){
    console.log("welcome back");
}

Sjitclg("welcome",Callbackeg)
