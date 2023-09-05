const val = require("http");
const server = val.createServer((req,res) => {
    let urlData = req.url;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    if(urlData=='/home'){
        res.write('<body><h1>Welcome Home</h1></body>')
    }
    else if(urlData=='/about'){
        res.write('<body><h1>Welcome to About Us page</h1></body>')
    }
    else{
        res.write('<body><h1>Welcome to my node Js project</h1></body>')
    }
    res.write('</html');
    res.end();
    console.log('done');
})

server.listen(4000);
