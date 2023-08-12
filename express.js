const express = require('express');

const app = express()

app.use((req,res, next) => {
    console.log('In the MiddleWare');
    next();
});

app.use((req,res, next) => {
    console.log('In another MiddleWare');
    res.send('<h1>Hello to Node JS</h1>');
});

app.listen(3000)