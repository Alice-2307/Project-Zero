const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'view');

const adminRoutes = require('./routers/admin.js');
const shopRoutes = require('./routers/shop.js');
const contactusRoutes = require('./routers/contactUs.js');
const successRoutes = require('./routers/success.js');
const notfoundController = require('./controllers/404.js');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(contactusRoutes);
app.use(successRoutes);

app.use(shopRoutes);

app.use(notfoundController.notfoundcontroller);

app.listen(3000)