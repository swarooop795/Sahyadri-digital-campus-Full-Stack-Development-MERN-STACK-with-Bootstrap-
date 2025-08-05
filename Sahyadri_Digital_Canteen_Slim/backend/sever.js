const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Admin = require('./models/Admin');
const Order = require('./models/Order');
const Feedback = require('./models/Feedback');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/canteen', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use('/api', adminRoutes);

// Insert sample admin, orders, and feedback
async function insertSampleData() {
  const existing = await Admin.findOne({ username: 'admin' });
  if (!existing) {
    await Admin.create({ username: 'admin', password: 'admin123' });

    await Order.create([
      {
        customerName: 'Alice',
        items: [{ name: 'Idli', quantity: 2, price: 20 }],
        status: 'Pending',
        total: 40
      },
      {
        customerName: 'Bob',
        items: [{ name: 'Dosa', quantity: 1, price: 30 }],
        status: 'Completed',
        total: 30
      }
    ]);

    await Feedback.create([
      { user: 'Alice', message: 'Great food!' },
      { user: 'Bob', message: 'Delivery was quick!' }
    ]);

    console.log("✅ Sample admin, orders, and feedback added.");
  }
}
insertSampleData();

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});