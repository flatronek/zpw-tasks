var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Product = require('../models/Product.js');

router.get('/', (request, response, next) => {
	console.log(`${request.method} on /products`)

	var limit = parseInt(request.query.limit)
	var offset = parseInt(request.query.offset)
	var search = request.query.search
	if (offset == undefined) {
		offset = 0
	}

	var dbQuery = Product.find().skip(offset)

	if (limit != undefined) {
		dbQuery = dbQuery.limit(limit)
	} 

	dbQuery.exec(function (err, products) {
		if (err) return next(err);
		response.json(products);
	});
})

router.get('/:id', (request, response, next) => {
	console.log(`${request.method} on /products`)
	Product.findById(request.params.id, function (err, product) {
		if (err) return next(err);

		response.headers
		response.json(product);
	});
})

router.post('/', (request, response, next) => {
	console.log(`${request.method} on /products`)
	Product.create(request.body, function (err, product) {
		if (err) return next(err);
		response.json(product);
	});
})

router.put('/:id', (request, response, next) => {
	console.log(`${request.method} on /products`)
	Product.findByIdAndUpdate(request.params.id, request.body, function (err, product) {
		if (err) return next(err);
		response.json(product);
	});
})

router.delete('/:id', (request, response, next) => {
	console.log(`${request.method} on /products`)
	Product.findByIdAndRemove(request.params.id, function (err, product) {
		if (err) return next(err);
		response.json(product);
	});
})

module.exports = router;