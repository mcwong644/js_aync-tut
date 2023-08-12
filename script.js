//https://youtu.be/cuEtnrL9-H0
//Learn Fetch API In 6 Minutes
// Web Dev Simplified
// use Node

fetch('https://reqres.in/api/users/')
.then(res=>res.json())
// .then(data=> console.log(data))
.then((data)=>{
    console.log(data);
    
    });
