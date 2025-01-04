var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();
var mongoose = require('mongoose');

var apiRouter = require('./routes/api');
var authentication = require('./routes/authentication');
var createUser = require('./routes/createuser');
var home = require('./routes/home');
var userRoutes = require('./routes/user');
var addProduct = require('./routes/addproduct');

var authMiddleware = require('./middlewares/AuthorizationMW');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

const corsOptions = {
  origin: process.env.WEB_URL,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};

app.use(cors(corsOptions));

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI);

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self';");
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  );
  next();
});

app.use('/api', apiRouter);
app.use('/authentication', authentication);
app.use('/createuser', createUser);
app.use('/', home);

app.use('/user', authMiddleware, userRoutes);
app.use('/add-product', addProduct);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

module.exports = app;
