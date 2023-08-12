//colorcode stop 21:19
//https://youtu.be/TnhCX0KkPqs
//JavaScript Promises -- Tutorial for Beginners

function getWeather(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(`Cloudy`)
        },100)
        // resolve('sunny') 
        // reject('Thunderstorm') // reject calls 2nd function
    })
}

function getWeatherIcon(weather){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            switch(weather){
                case 'Sunny':
                    resolve('☀')
                    break
                case 'Cloudy':
                    resolve('☁')
                case 'Rainy':
                    resolve('🌧')
                    break
                default:
                    reject('No icon')
            }
        })
    })
}

function onSuccess(data){
    console.log(`Success param ${data}`);
}

function onErr(error){
    console.log(`Error param ${error}`);
}

getWeather()
    .then(getWeatherIcon)
    .then(onSuccess,onErr)
    

