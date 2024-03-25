// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

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
        const data = await YourModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
