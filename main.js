// https://youtu.be/fyGSyqEX2dw
// Don't Imitate, Understand #2 - Promises, Async, and Await
// stop 2:21

function runThis(otherFn){
    console.log("Running...");
    otherFn();

}

runThis(()=>{
    console.log("function 1 ...");
})
runThis(()=>{
    console.log("function 2 ...");
})

