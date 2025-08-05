const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Order = require('../models/Order');
const Feedback = require('../models/Feedback');

// Admin Login
router.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (admin && admin.password === password) {
    return res.json({ success: true, message: 'Login successful' });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Get all orders
router.get('/orders', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// Update order status
router.put('/orders/:id', async (req, res) => {
  const { status } = req.body;
  const updated = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(updated);
});

// Delete order
router.delete('/orders/:id', async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// Get feedback
router.get('/feedback', async (req, res) => {
  const feedback = await Feedback.find();
  res.json(feedback);
});

module.exports = router;