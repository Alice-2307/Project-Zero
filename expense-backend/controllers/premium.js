const Expense = require("../models/expense");
const User = require("../models/user");
const Sequelize = require("sequelize");

exports.showLeaderboard = async (req, res, next) => {
    try {
        const leaderboard = await User.findAll({
            attributes: ['id','name',[Sequelize.fn('sum', Sequelize.col('expenses.amount')), 'total']],
            include: [
                {
                    model: Expense,
                    attributes: []
                }
            ],
            group: ['user.id'],
            order:[['total','Desc']]

        });
        res.status(201).json({ leaderboard, isPremium: req.user.isPremium });

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "An error occurred" })
    }
}