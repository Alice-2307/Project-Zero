const Expense = require("../models/expense");
const User = require("../models/user");

exports.showLeaderboard = async (req, res, next) => {
    try {
        const allExpense = await Expense.findAll();
        const allUser = await User.findAll();
        const totalExpense = {}
        allExpense.forEach(element => {
            if (totalExpense[element.userId]) {
                totalExpense[element.userId] += element.amount;
            }
            else {
                totalExpense[element.userId] = element.amount;
            }
        });
        const leaderboard = [];
        allUser.forEach(element => {
            leaderboard.push({ name: element.name, total: totalExpense[element.id] || 0 })

        })
        leaderboard.sort((a, b) => b.total - a.total);
        console.log(leaderboard);
        res.status(201).json({ leaderboard, isPremium: req.user.isPremium });

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "An error occurred" })
    }
}