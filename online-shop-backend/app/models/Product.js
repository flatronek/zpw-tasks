var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	desc: String,
	price: Number,
	category: String,
	count: Number
});

module.exports = mongoose.model('Product', ProductSchema);
