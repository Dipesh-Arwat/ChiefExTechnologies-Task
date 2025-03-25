const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

// **1. Add Transactions (For Testing)**
router.post('/add', async (req, res) => {
  try {
    const { transactionId, amount, date, type } = req.body;
    const transaction = new Transaction({ transactionId, amount, date, type });
    await transaction.save();
    res.status(201).json({ message: 'Transaction added', transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// **2. Optimized Search & Pagination**
router.get('/search', async (req, res) => {
  try {
    const { query, page = 1, limit = 10 } = req.query;
    const regex = new RegExp(query, 'i');

    const transactions = await Transaction.find({ transactionId: regex })
      .sort({ date: -1 }) // Latest first
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({ page, transactions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// **3. Filter Transactions by Date Range**
router.get('/filter', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const transactions = await Transaction.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) }
    }).sort({ date: -1 });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
