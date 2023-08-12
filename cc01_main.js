//colorcode

function getWeather(){
    return new Promise(function(resolve,reject){
        // resolve('sunny') 
        reject('Sunny') // reject calls 2nd function
    })
}

const promise=getWeather()
console.log(promise);

promise.then(function(data){
    console.log(`First param ${data}`);
},
function(data){
    console.log(`Second param ${data}`)
}
)

