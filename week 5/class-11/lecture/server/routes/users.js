var express = require('express');
var router = express.Router();
var app = express();

// const jwt = require('jsonwebtoken');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-c23tlbbe.us.auth0.com/.well-known/jwks.json'
}),
audience: 'APITest301',
issuer: ['https://dev-c23tlbbe.us.auth0.com/'],
algorithms: ['RS256']
});

app.use(jwtCheck);

// this function comes directly from the jsonwebtoken docs
function getKey(header, callback){
  client.getSigningKey(header.kid, function(err, key) {
    console.log(`Error: ${err} Key: ${key}`);
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Secured Endpoint');
  const token = request.headers.authorization.split(' ')[1];
 
  jwt.verify(token, getKey, {}, function(err, user) {
    if (err){
      response.send('invalid token');
    }
    response.send(user);
  });
});

module.exports = router;
