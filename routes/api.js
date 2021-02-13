const router = require("express").Router();
const e = require("express");
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({body}, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.post("/api/transaction/bulk", ({body}, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
    
      console.error(err);
      res.status(404).json(err);
    });
});
// mongodb+srv://admin:dEOIhYKoRXWf1hoC@cluster0.qlmzq.mongodb.net/budget_tracker?retryWrites=true&w=majority
// heroku config:set MONGODB_URI="
module.exports = router;