//https://youtu.be/PoRJizFvM7s
//Async JS Crash Course - Callbacks, Promises, Async Await Traversy Media
//n this crash course we will look at asynchronous JavaScript and cover callbacks, promises including promise.all as well as the async / await syntax.
// stop 10:00

//callbacks

const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'},
];

function getPosts() {
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        })
        document.body.innerHTML=output;
    },1000)
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}

//getPosts(); move inside createPost()
createPost({title:'post three', body:'this is post three'},getPosts);