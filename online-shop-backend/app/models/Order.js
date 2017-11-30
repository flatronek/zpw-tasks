var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	recipientName: String,
	recipientAddress: String,
	items: [{
		_id: mongoose.Schema.ObjectId,
		name: String,
		desc: String
	}]
});

module.exports = mongoose.model('Order', OrderSchema);
