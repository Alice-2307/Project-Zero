const express = require("express");

const cors = require("cors");

const env = require("dotenv");

const sequelize = require("./utils/database");

const user = require("./routers/user");

const expense = require("./routers/expense");

const purchase = require("./routers/order");

const User = require("./models/user")

const Expense = require("./models/expense")

const Order = require("./models/order");

const app = express();

env.config();

app.use(cors());

app.use(express.json());

app.use("/user", user);

app.use("/expense", expense)

app.use("/purchase", purchase)

User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

sequelize.sync().then(result => {
    app.listen(3000);
    console.log("Start Port 3000");
}).catch(err => console.log(err));


