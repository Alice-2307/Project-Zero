const expense = require("../models/expense");

exports.postExpenseDetail = (req, res, next) => {

  const text = req.body.Text;
  const category = req.body.Category;
  const amount = req.body.Amount;
  expense
    .create({
      text: text,
      amount: amount,
      category: category
    })
    .then((result) => {
      console.log("Expense Create Successfully");
      res.status(201).json({ ExpenseData: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ Error: "An error occurred" });
    });
};

exports.getExpenseDetail = (req, res, next) => {
  expense
    .findAll()
    .then((result) => {
      console.log("Get All Expense Data Successfully");
      res.status(200).json({ getExpenseData: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ Error: "An error occurred" });
    });
};

exports.deleteExpenseDetail = (req, res, next) => {
  const Expenseid = req.params.id;
  console.log(Expenseid);
  expense
    .findByPk(Expenseid)
    .then((result) => {
      result
        .destroy()
        .then(() => {
          console.log("Delete Successfully");
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ Error: "An error occurred" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ Error: "An error occurred" });
    });
};
