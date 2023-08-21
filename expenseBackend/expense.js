const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const app = express();

app.use(cors());

app.use(bodyParser.json());

const expenseData = require("./router/expensedata");

app.use(express());

app.use("/", expenseData);

sequelize
    .sync()
    .then((result) => {
        app.listen(3000);
    })
    .catch((err) => console.log(err));
