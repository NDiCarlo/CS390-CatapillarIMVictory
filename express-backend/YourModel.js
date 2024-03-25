const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
    structure_id: Number,
    structure_type: String,
    user_id: Number,
    tags: [String],
});

const YourModel = mongoose.model('YourModel', yourSchema);

module.exports = YourModel;
