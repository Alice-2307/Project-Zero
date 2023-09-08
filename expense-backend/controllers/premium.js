const User = require("../models/user");

exports.showLeaderboard = async (req, res, next) => {
    try {
        const leaderboard  =await User.findAll({
            attributes: ['name','totalExpense'],
            order: [['totalExpense','Desc']]
        })
        res.status(201).json({ leaderboard, isPremium: req.user.isPremium });

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "An error occurred" })
    }
}