const express = require("express");

const cors = require("cors");

const sequelize = require("./utils/database");

const user = require("./routers/user");

const expense = require("./routers/expense");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/user", user);

app.use("/expense", expense)

sequelize.sync().then(result => {
    app.listen(3000);
    console.log("Start Port 3000");
}).catch(err => console.log(err));


