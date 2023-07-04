
let posts = []


function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post);
            resolve();
        }, 3000)
    }) 
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
           let lastActivity = new Date()
            resolve(lastActivity);
        }, 1000)
    })
}

function showPost(){
    posts.forEach((post) => {
        console.log(`${post.title} -> ${post.body}`)
    })
}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length>0){
                posts.pop();
                resolve();
            }
            else{
                reject("ERROR");
            }
        }, 5000)
    })
}

Promise.all([createPost({title: 'POST1', body: 'This is POST1'}),updateLastUserActivityTime()]).then((val) => {
    showPost();
    console.log(`Last Activity Time -> ${val[1]}`);
    Promise.all([createPost({title: 'POST2', body: 'This is POST2'}),updateLastUserActivityTime()]).then((val1)=> {
        showPost();
        console.log(`Last Activity Time -> ${val1[1]}`);
        deletePost().then(() => {
            Promise.all([createPost({title: 'POST3', body: 'This is POST3'}),updateLastUserActivityTime()]).then((val2)=> {
                showPost();
                console.log(`Last Activity Time -> ${val2[1]}`);
            })
        }).catch((err) => console.log(err));
    })
})