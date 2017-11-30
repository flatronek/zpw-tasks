var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Order = require('../models/Order.js');

router.get('/', (request, response, next) => {
	console.log(`${request.method} on /orders`)
	Order.find(function (err, orders) {
		if (err) return next(err);
		response.json(orders);
	});
})

router.get('/:id', (request, response, next) => {
	console.log(`${request.method} on /orders`)
	Order.findById(request.params.id, function (err, order) {
		if (err) return next(err);
		response.json(order);
	});
})

router.post('/', (request, response, next) => {
	console.log(`${request.method} on /orders`)
	Order.create(request.body, function (err, order) {
		if (err) return next(err);
		response.json(order);
	});
})

router.put('/:id', (request, response, next) => {
	console.log(`${request.method} on /orders`)
	Order.findByIdAndUpdate(request.params.id, request.body, function (err, order) {
		if (err) return next(err);
		response.json(order);
	});
})

router.delete('/:id', (request, response, next) => {
	console.log(`${request.method} on /orders`)
	Order.findByIdAndRemove(request.params.id, function (err, order) {
		if (err) return next(err);
		response.json(order);
	});
})

module.exports = router;