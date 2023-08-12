//https://youtu.be/exBgWAIeIeg
//Asynchronous JavaScript Crash Course
// Codevolution, stop 16:43


function greetVish(greetFn,name){
    greetFn(name)
}

function greet(name){
    console.log(`hello ${name}`);
}
greetVish(greet,'wong')
greetVish(greet,'Vishwas')