var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	desc: String,
	price: Number,
	count: Number
});

module.exports = mongoose.model('Product', ProductSchema);
