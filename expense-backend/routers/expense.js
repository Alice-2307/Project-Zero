const express = require("express")

const router = express.Router();

const expenseController = require("../controllers/expense");

const userAuthentication = require("../middlewares/auth");

const userMiddlewares = userAuthentication.authentication;

router.post("/addExpense",userMiddlewares, expenseController.addExpense);

router.get("/getExpense",userMiddlewares, expenseController.getExpense);

router.delete("/:id",userMiddlewares, expenseController.deleteExpense);

module.exports = router;