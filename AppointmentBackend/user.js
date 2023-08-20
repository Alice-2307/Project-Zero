const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const user = require("./models/user");

const app = express();

app.use(cors());

app.use(bodyParser.json());

const userData = require("./router/userdata");

app.use(express());

app.use("/", userData);

sequelize
    .sync()
    .then((result) => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));
