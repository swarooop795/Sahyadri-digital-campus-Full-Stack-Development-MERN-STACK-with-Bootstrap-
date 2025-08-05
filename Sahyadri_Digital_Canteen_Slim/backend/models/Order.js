const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: String,
  items: [{ name: String, quantity: Number, price: Number }],
  status: { type: String, default: 'Pending' },
  total: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);