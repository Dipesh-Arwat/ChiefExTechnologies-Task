const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  type: { type: String, enum: ['credit', 'debit'], required: true }
});

transactionSchema.index({ transactionId: 1, date: -1 }); // Indexing for faster search

module.exports = mongoose.model('Transaction', transactionSchema);
