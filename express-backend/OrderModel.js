const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_id: Number,
    user_id: Number,
    structures: [Number],
    status: {
        type: String,
        default: 'ongoing'
    },
    date_submitted: {
        type: Date,
        default: Date.now
    }
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;
