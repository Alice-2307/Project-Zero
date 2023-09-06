const express = require("express")

const router = express.Router();

const expenseController = require("../controllers/expense");

router.post("/addExpense", expenseController.addExpense);

router.get("/getExpense", expenseController.getExpense);

router.delete("/:id", expenseController.deleteExpense);

module.exports = router;