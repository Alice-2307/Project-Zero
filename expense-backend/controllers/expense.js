const expense = require("../models/expense");

const user = require("../models/user");


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
        let totEx = req.user.totalExpense;
        totEx += parseInt(amount);

        console.log("Expense Added")
        req.user.update({ totalExpense: totEx})
        res.status(201).json({ expenseData: result })

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "An error occurred" })
    }
}

exports.getExpense = async (req, res, next) => {
    try {
        const allExpenseData = await expense.findAll({ where: { userId: req.user.id } });
        console.log("Get all expense");
        res.status(200).json({ allExpense: allExpenseData, isPremium: req.user.isPremium })

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "An error occurred" })
    }
}

exports.deleteExpense = async (req, res, next) => {
    const expenseId = req.params.id;

    try {
        let deleteVal = await expense.findOne({ where: { id: expenseId, userId: req.user.id } });
        let amount = deleteVal.amount;
        deleteVal.destroy();
        console.log("Delete Successfully");
        let totEx = req.user.totalExpense;
        totEx -= parseInt(amount);
        req.user.update({ totalExpense: totEx })
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "An error occurred" })
    }
}