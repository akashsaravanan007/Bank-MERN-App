const express = require("express");
const router = express.Router();

const Transaction = require("../../models/Transaction");

router.get("/", (req, res) => {
  Transaction.find()
    .sort({ date: -1 })
    .then((transactions) => res.json(transactions));
});

router.post("/", (req, res) => {
  const newTransaction = new Transaction({
    accountNumber: req.body.accountNumber,
    name: req.body.name,
    address: req.body.address,
    reference: req.body.reference,
    amount: req.body.amount,
  });
  newTransaction.save().then((transaction) => res.json(transaction));
});

module.exports = router;
