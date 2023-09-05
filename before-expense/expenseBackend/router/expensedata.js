const express = require("express");

const ExpenseDataController = require("../controller/expensecontroller");

const router = express.Router();

router.post("/ExpenseData", ExpenseDataController.postExpenseDetail);

router.get("/getExpenseData", ExpenseDataController.getExpenseDetail);

router.delete("/deleteExpenseData/:id", ExpenseDataController.deleteExpenseDetail);

module.exports = router;
