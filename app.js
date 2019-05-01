//Import !!!
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./models/db');
const app = express();

//Config !!!
const puppiesRouter = require('./routes/puppies');
const foodsRouter = require('./routes/foods');

app.use(volleyball);
// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Modular Routes - Create routes for Puppies and Food!!!
// API routers to serve up data from the server
app.use('/puppies', require('./routes/puppies'));
app.use('/foods', foodsRouter);

app.use('*', function(req, res, next) {
  res.send('this is my default route');
});

// Create Server !!!
var server = app.listen(3000, function() {
  // this is an async callback, so the server.address().port is available
  // and set synchronously by the time we get into this callback function - fancy!
  console.log('Server operating and listening on port', server.address().port, '...');
  // change to force: true whenever you make a change to the db definition
  db.sync({force: false})
    .then(message => {
      console.log('...and db is synced!');
    })
    .catch(function(err) {
      throw err;
    });
});
