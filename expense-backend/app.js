const express = require("express");

const cors = require("cors");

const sequelize = require("./utils/database");

const user = require("./routers/user");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/user", user);

sequelize.sync().then(result => {
    app.listen(3000);
    console.log("Start Port 3000");
}).catch(err => console.log(err));


