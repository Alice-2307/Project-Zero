const expense = require("../models/expense");


exports.addExpense = async (req, res, next) => {
    const desc = req.body.description;
    const amount = req.body.amount;
    const category = req.body.category

    try {
        let result = await expense.create({
            description: desc,
            amount: amount,
            category: category,
            userId: req.user.id
        })
        console.log("Expense Added")
        res.status(201).json({ expenseData: result })

    } catch (err) {
        console.log(errr);
        res.status(500).json({ Error: "An error occurred" })
    }
}

exports.getExpense = async (req, res, next) => {
    try {
        const allExpenseData = await expense.findAll({ where: { userId: req.user.id } });
        console.log("Get all expense");
        res.status(200).json({ allExpense: allExpenseData })

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "An error occurred" })
    }
}

exports.deleteExpense = async (req, res, next) => {
    const expenseId = req.params.id;

    try {
        let deleteVal = await expense.findOne({ where: { id: expenseId, userId: req.user.id } });
        deleteVal.destroy();
        console.log("Delete Successfully");
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "An error occurred" })
    }
}