//https://youtu.be/exBgWAIeIeg
//Asynchronous JavaScript Crash Course
// Codevolution, stop 11:43

function greet(){
    console.log(`hello`);
}

setTimeout(greet,2000);
console.log(`second line`);
console.log(`third line`);