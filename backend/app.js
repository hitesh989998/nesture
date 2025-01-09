var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();
var mongoose = require('mongoose');

const paymentRoutes = require('./routes/paymentRoutes');

var apiRouter = require('./routes/api');
var authentication = require('./routes/authentication');
var home = require('./routes/home');
var userNameSpace = require('./routes/userNamespace');
var logout = require('./routes/logout');
var productRoutes = require('./routes/productRoutes');
var userRoutes = require('./routes/userRoutes');
var userCreation = require('./routes/userCreation');
var charts = require('./routes/charts');

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
app.use('/public', express.static('public'));

const corsOptions = {
  origin: process.env.WEB_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
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
app.use('/', home);

app.use('/logout', authMiddleware, logout);
app.use('/user', authMiddleware, userNameSpace);
app.use('/create-user', userCreation);
app.use('/api/payment', paymentRoutes);

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/charts', charts);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const multerErrorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    }
    next(err); // Pass any other errors to the next middleware
  };

  // Apply the error handler in your app
  app.use(multerErrorHandler);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

module.exports = app;
