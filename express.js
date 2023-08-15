const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const path = require('path');

const adminRoutes = require('./router/admin.js');
const shopRoutes = require('./router/shop.js');
const contactusRoutes = require('./router/contactUs.js');
const successRoutes = require('./router/success.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(contactusRoutes);
app.use(successRoutes);

app.use(shopRoutes);

app.use((req,res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000)