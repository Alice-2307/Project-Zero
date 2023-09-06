const expense = require("../models/expense");

exports.addExpense = async(req,res,next) => {
    const desc = req.body.description;
    const amount = req.body.amount;
    const category = req.body.category

    try{
        let result = await expense.create({
            description: desc,
            amount: amount,
            category: category
        })
        console.log("Expense Added")
        res.status(201).json({expenseData: result})

    } catch(err){
        console.log(errr);
        res.status(500).json({Error: "An error occurred"})
    }
}

exports.getExpense = async(req,res,next) => {
    try{
        let allExpesneData = await expense.findAll();
        console.log("Get all expense");
        res.status(200).json({allExpense: allExpesneData})

    } catch(err){
        console.log(errr);
        res.status(500).json({Error: "An error occurred"})
    }
}

exports.deleteExpense = async(req,res,next) => {
    let expenseId = req.params.id;

    try{
        let deleteVal = await expense.findByPk(expenseId);
        deleteVal.destroy();
        console.log("Delete Successfully");
    } catch(err){
        console.log(err);
        res.status(500).json({Error: "An error occurred"})
    }
}