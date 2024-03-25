const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
    // Define the schema fields here
    field1: String,
    field2: Number,
    // Add more fields as needed
});

const YourModel = mongoose.model('YourModel', yourSchema);

module.exports = YourModel;