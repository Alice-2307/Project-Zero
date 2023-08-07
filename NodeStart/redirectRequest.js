const val = require("http");
const file = require('fs');
const server = val.createServer((req,res) => {
    const urlData = req.url;
    const methodData = req.method;

    if(urlData=='/'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="anything"><button type="submit">Submit</button></form></body>');
        res.write('</html');
        return res.end();
    }
    if(urlData==='/message' && methodData==='POST'){
        file.writeFileSync('dataFile.txt', 'Dummy');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
})
server.listen(4000)