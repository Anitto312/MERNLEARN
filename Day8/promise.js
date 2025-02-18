// function promiseeg(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value)resolve("the promise is resolved");
//             else reject("this promise is not resolved");
//         },2000)
        
//     })
// }
// promiseeg(false)
//  .then((res)=>{
//     console.log(res);
// })
//  .catch((res)=>{
//     console.log(res);
// })

//location finder
//1.promise(locFound,locNotFound)
//2.Chennai,2000

// function locationFinder(loc,time){
//     var location = new Promise((locFound,locNotFound)=>{
//         setTimeout(()=>{
//             if(isLocationFound(loc,time)){
//                 locFound("Chennai")
//             }
//             else{
//                 locNotFound(loc,"Not found")
//             }
//         })
//     },time)
//     location.then((found)=>{
//         console.log("found")
//     }).catch((notFound)=>{
//         console.log("notfound")
//     })
// }
// isLocationFound=(loc,time)=>{
//     location="Chennai"
//     t = 1000
//     if(loc === location && t<=time){
//         return true;
//     }
//     else{
//         return false;
//     }
// };
// locationFinder("Chennai",2000);