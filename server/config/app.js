var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');
	
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

require('./api/models/db');
require('./api/config/passport');

//middleware
app.use(passport.initialize());
app.use('/api', routesApi);

module.exports.start = function() {
  var app = express.init();
  app.listen(process.env.PORT || 8080, function() {
	  console.log('App listening on port', this.address().port, app.settings.env);  
    });
};
