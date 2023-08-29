const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const app = express();

app.use(cors());

app.use(bodyParser.json());

const ProductData = require("./router/Productdata");

app.use("/", ProductData);

sequelize
    .sync()
    .then((result) => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));
