let posts = []

function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post);
            resolve();
        },3000)
    }) 
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
           let lastActivity = new Date().getTime();
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

async function onlinePost(){
    await createPost({title: 'POST1', body: 'This is POST1'});
    showPost();
    console.log(await updateLastUserActivityTime());
try{
    await deletePost();
} catch(err){
    console.log(err);
}
    await(createPost({title: 'POST2', body: 'This is POST2'}));
    showPost();
    console.log(await updateLastUserActivityTime());

}

onlinePost();