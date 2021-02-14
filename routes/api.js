const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({}).sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});
// mongodb+srv://admin:dEOIhYKoRXWf1hoC@cluster0.qlmzq.mongodb.net/budget_tracker?retryWrites=true&w=majority
// heroku config:set MONGODB_URI="
// RqoWtF35qtBQox2p
// mongodb+srv://admin:RqoWtF35qtBQox2p@cluster0.yctnd.mongodb.net/budgetßß?retryWrites=true&w=majority
module.exports = router;