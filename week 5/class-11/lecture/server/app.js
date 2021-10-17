var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// environment vars
require('dotenv').config();

var app = express();
app.use(cors());

// const jwt = require('express-jwt');
// const jwtAuthz = require('express-jwt-authz');
// const jwksRsa = require('jwks-rsa');

// var checkJwt = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://dev-c23tlbbe.us.auth0.com/.well-known/jwks.json'
//     // jwksUri: 'https://dev-4rwdhvtd.us.auth0.com/.well-known/jwks.json'
//   }),
//   audience: 'APITest301',
//   issuer: 'https://dev-c23tlbbe.us.auth0.com/',
//   // issuer: 'https://dev-4rwdhvtd.us.auth0.com/',
//   algorithms: ['RS256']
// });

// app.use(checkJwt);

// // This route doesn't need authentication
// app.get('/api/public', function(req, res) {
//   res.json({
//     message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
//   });
// });

// // This route needs authentication
// app.get('/api/private', checkJwt, function(req, res) {
//   res.json({
//     message: 'Hello from a private endpoint! You need to be authenticated to see this.'
//   });
// });

// auth0
const { auth, requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  // secret: 'a long, randomly-generated string stored in env',
  // baseURL: 'http://localhost:3000',
  // clientID: '8bIVVaUg03OyixV7LciOl1wFdgZ86awG',
  // issuerBaseURL: 'https://dev-c23tlbbe.us.auth0.com'
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER  
};

console.log(process.env.SECRET);
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=> {
  res.send(req.oidc.isAuthenticated()?'Logged in' : 'Logged Out');
});

app.get('/profile', requiresAuth(), (req,res) => {
  res.send(JSON.stringify(req.oidc.user));
})
// app.use('/profile', usersRouter);
// app.get('/profile', (req,res)=> {
//   console.log(`request received`);
//   res.send('dont panic');
// });
// const { requiresAuth } = require('express-openid-connect');
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });
// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });
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

module.exports = app;
