const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/login', (req,res,next) => {

    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action= "/login" method="POST"><input id="username" type="text" name="username" placeholder="username"><br><br><button type="submit">Login</button></form>');
})

app.post('/login', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

app.get('/', (req,res, next) => {

    if(req.body.message==undefined){
        fs.appendFileSync('chatdata.txt', '')
    }
    const value = fs.readFileSync('chatdata.txt');

    res.send(`${value}<form action= "/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input id="message" name="message" type="text" placeholder="message"><br><br><input type="hidden" name= "username" id = "username"><button type="submit">Send</button></form>`);
});

app.post('/', (req,res,next) =>{
    console.log(req.body);

    fs.appendFileSync('chatdata.txt',`${req.body.username}: ${req.body.message} `);

    const value = fs.readFileSync('chatdata.txt');
    res.send(`${value}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action ="/" method="POST"><input id="message" name="message" type="text" placeholder="message"><input type="hidden" name= "username" id = "username"><br><br><button type="submit">Send</button></form>`);
})

app.listen(3000);