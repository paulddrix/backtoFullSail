// require imports
const error = require('debug')('api:error');
const express = require('express');
// instantiate a express app
const app = express();
// required body parser
const bodyParser = require('body-parser');
// app debugger
const morganDebug = require('morgan-debug');
// required the routes
const decisionRouter = require('./routes/decisions');
// this middleware check for content-type and into the req.body
app.use(bodyParser.json());
// set up app to mount the decisions router on the /decisions path
app.use('/decisions', decisionRouter);
// middleware to log all request
app.use(morganDebug('api:request', 'dev'));
// four params are required to mark this as a error handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  error('Error found: ', err);
  res.sendStatus(500);
});

// export the app as a module
module.exports = app;
