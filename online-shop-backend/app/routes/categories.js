var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Category = require('../models/Category.js');


router.get('/', (request, response, next) => {
	console.log(`${request.method} on /categories`)
	Category.find(function (err, categories) {
		if (err) return next(err);
		response.json(categories);
	});
})

router.get('/:id', (request, response, next) => {
	console.log(`${request.method} on /categories`)
	Category.findById(request.params.id, function (err, category) {
		if (err) return next(err);
		response.json(category);
	});
})

router.post('/', (request, response, next) => {
	console.log(`${request.method} on /categories`)
	Category.create(request.body, function (err, category) {
		if (err) return next(err);
		response.json(category);
	});
})

router.put('/:id', (request, response, next) => {
	console.log(`${request.method} on /categories`)
	Category.findByIdAndUpdate(request.params.id, request.body, function (err, category) {
		if (err) return next(err);
		response.json(category);
	});
})

router.delete('/:id', (request, response, next) => {
	console.log(`${request.method} on /categories`)
	Category.findByIdAndRemove(request.params.id, function (err, category) {
		if (err) return next(err);
		response.json(category);
	});
})

module.exports = router;