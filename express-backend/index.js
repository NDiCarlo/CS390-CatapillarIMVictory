const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const YourModel = require('../models/YourModel');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB Compass
mongoose.connect('mongodb://localhost:27017/highonvictory', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define routes here

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
