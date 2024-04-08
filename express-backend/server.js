// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const YourModel = require('./YourModel'); // Corrected import path for YourModel
const OrderModel = require('./OrderModel'); // Corrected import path for OrderModel

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/highonvictory', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes

// Define a Mongoose model and schema
const DataSchema = new mongoose.Schema({
    UserID: Number,
    UserName: String,
    Password: String,
    Country: String,
    Email: String
});
const DataModel = mongoose.model('structures', DataSchema);

// Define routes
app.get('/api/data', async (req, res) => {
    try {
        const data = await DataModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create order route
app.post('/api/orders', async (req, res) => {
    try {
        const { user_id, structures } = req.body;
        const order = new OrderModel({
            order_id: Math.floor(Math.random() * 1000), // Generate a random order ID
            user_id,
            structures,
            status: 'ongoing',
            date_submitted: new Date()
        });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all orders route
app.get('/api/orders', async (req, res) => {
    try {
        let orders;
        if (req.query.user_id) {
            orders = await OrderModel.find({ user_id: req.query.user_id });
        } else {
            orders = await OrderModel.find();
        }
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));