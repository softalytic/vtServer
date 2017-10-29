var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var appRoutes = require('./routes/app');
var workflow = require('./routes/workflow'); // added
var mongoose = require('mongoose'); // added
var cors = require('cors'); // added

var app = express();

// Connecting to Mongodb
mongoose.connect('localhost:27017');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('<<<--- connected to mongodb --->>>')
});

app.use(cors()); // Added

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json({limit: '50mb'})); // Added
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); // Added
// Below standard code are commented out because of the size limit
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Below code are used to overwrite the http headers
app.use(function ( req, res, next ) {
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Headers',"Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods',"POST, GET, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/', appRoutes);
app.use('/workflow', workflow);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
