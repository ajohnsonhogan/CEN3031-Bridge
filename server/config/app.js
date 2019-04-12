import express from 'express';
import bodyParser from 'body-parser';

import routes from './server/routes';


var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
  var app = express.init();
  app.listen(process.env.PORT || 8080, function() {
	  console.log('App listening on port', this.address().port, app.settings.env);  
    });
};

const app = express();

// ...

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// App routes
routes(app);

//
