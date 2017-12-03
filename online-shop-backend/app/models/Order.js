var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	recipientId: String,
	recipientName: String,
	recipientAddress: String,
	status: String,
	items: [{
		_id: mongoose.Schema.ObjectId,
		name: String,
		orderedCount: Number,
		price: Number
	}]
});

module.exports = mongoose.model('Order', OrderSchema);
