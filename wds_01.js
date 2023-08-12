// https://youtu.be/V_Kr9OSfDeU
// JavaScript Async Await
// Web Dev Simplified

function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`making request to ${location}`);
        if(location==="Google") {
            resolve('Google says Hi...')
        } else {
            reject("we can only talk to Google");
        }
    })
}

function processRequest(response) {
    return new Promise((resolve,reject)=>{
        console.log('processing request');
        resolve(`extra info + ${response}`)
    })
}

makeRequest("Google").then(response=>{
    console.log('response received');
    return processRequest(response);
}).then(processedResponse=>{
    console.log(processedResponse);
}).catch(err=>{
    console.log(err);
});