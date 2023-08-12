//https://youtu.be/PoRJizFvM7s
//Async JS Crash Course - Callbacks, Promises, Async Await Traversy Media
//n this crash course we will look at asynchronous JavaScript and cover callbacks, promises including promise.all as well as the async / await syntax.

// stop 18:00

// promises

const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' },
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} : ${post.body}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong!')
            }

        }, 2000)
    })
}


//getPosts(); move inside createPost()
createPost({ title: 'post three', body: 'this is post three'})
.then(getPosts)
// .catch(err=> console.log(err));
.catch((err)=>{
    let output='';
    output = `<h1>Error: something went wrong</h1>`;
    document.body.innerHTML = output;
});

// using Promise.all
const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Goodbye')
});

promise4= fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then((data)=>{
    let output='';
    data.forEach((post, index) => {
        output += `<li>${post.name}</li>`;
    })
    document.body.innerHTML = output;
});

Promise.all([promise1,promise2,promise3]).then(values=>{
    
    output = `<p>${values}<br></p>`;
    document.body.innerHTML = output;
});



