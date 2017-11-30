const express = require('express')
const app = express()
const port = 3000

// load mongoose package
var mongoose = require('mongoose');
// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect('mongodb://admin:admin@ds123146.mlab.com:23146/online-shop-zpw')
  .then(() =>  console.log('MongoDB: connection succesful'))
  .catch((err) => console.error(err));

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var categories = require('./routes/categories');
var products = require('./routes/products');
var orders = require('./routes/orders');

app.use((request, response, next) => {
	console.log("Received Request")
	console.log("Headers: " + JSON.stringify(request.headers))
	console.log("Query: " + JSON.stringify(request.query))
	next()
})

app.use('/categories', categories);
app.use('/products', products);
app.use('/orders', orders);

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

app.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
})
