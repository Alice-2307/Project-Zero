const file = require('fs');

const requestHandler = (req,res) => {
    const urlData = req.url;
    const methodData = req.method;
    const fl = file.readFileSync("dataFile.txt");

    if(urlData=='/'){
        
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>')
        res.write('<body>')
        res.write(`${fl}`);
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
        res.write('</body>');
        res.write('</html');
        return res.end();
    }
    if(urlData=='/message' && methodData=='POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            file.writeFileSync('dataFile.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html');
    res.end();
}
// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     text: 'Some Text'
// };

// module.exports.handler  = requestHandler;
// module.exports.text = 'Some Text'

exports.handler  = requestHandler;
exports.text = 'Some Text'