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

app.use((request, response, next) => {
	console.log("Received Request")
	console.log("Headers: " + JSON.stringify(request.headers))
	console.log("Query: " + JSON.stringify(request.query))
	next()
})

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	next();
});

// app.use(function(req, res, next) {
// 	var adminPassEnc = new Buffer("admin:admin").toString('base64');
// 	var correctAuthHeader = "Basic " + adminPassEnc;
// 	console.log("Correct auth header: " + correctAuthHeader);
// 	console.log("Req method: " + req.method + ", req url: " + req.originalUrl);
// 	console.log("Auth header: " + req.headers["authorization"]);

// 	if (((req.method == "GET" || req.method == "OPTIONS") && req.originalUrl == "/products") 
// 		|| ((req.method == "GET" || req.method == "OPTIONS") && req.originalUrl == "/orders")
// 		|| req.headers["authorization"] == correctAuthHeader) {

// 		next();
// 	} else {
// 		res.status(401).end();
// 	}
// });

var categories = require('./routes/categories');
var products = require('./routes/products');
var orders = require('./routes/orders');

app.use('/categories', categories);
app.use('/products', products);
app.use('/orders', orders);

var promoDuration;
var promoStartTime;
var promoDiscount;

app.post('/login', (request, response, next) => {
	response.status(200).end();
});

app.post('/promo', (request, response, next) => {
	console.log(`${request.method} on /promo`);
	console.log(request.body);
	promoDuration = request.body["time"] * 60 * 1000;
	promoDiscount = request.body["promo"];
	promoStartTime = new Date().getTime();
	response.status(200).end();
});

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

var server = app.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
})

const io = require('socket.io').listen(server);

io.on('connection' , function(client) {
	console.log('Client connected...' );
	client.emit('messages' , { hello: 'test' });
});

function tick () {
	var now = new Date().getTime();
	var timeLeft = promoDuration - (now - promoStartTime);

	var status;
	if (promoDuration === undefined || promoDiscount === undefined ||  timeLeft < 0) {
		status = "expired";
	} else {
		status = "active";
	}

	var obj = {
		"timeLeft": timeLeft,
		"promo": promoDiscount,
		"status": status
	};
	io.sockets.send(obj);
};

setInterval(tick, 1000);