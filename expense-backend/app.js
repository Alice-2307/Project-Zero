const express = require("express");

const cors = require("cors");

const sequelize = require("./utils/database");

const user = require("./routers/user");

const expense = require("./routers/expense");

const User = require("./models/user")

const Expense = require("./models/expense")

const app = express();

app.use(cors());

app.use(express.json());

app.use("/user", user);

app.use("/expense", expense)

User.hasMany(Expense);
Expense.belongsTo(User);

sequelize.sync().then(result => {
    app.listen(3000);
    console.log("Start Port 3000");
}).catch(err => console.log(err));


