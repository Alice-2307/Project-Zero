const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const sequelize = require("./utils/database");

const app = express();

app.use(cors());

app.use(bodyParser.json());

const productData = require("./routers/product");


app.use("/", productData);

sequelize
    .sync()
    .then((result) => {
        app.listen(5000);
        console.log(`Start Port 5000`);
    })
    .catch((err) => console.log(err));
