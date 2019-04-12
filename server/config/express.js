var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    ordersRouter = require('../routes/orders.server.routes'),
    accountRouter = require('../routes/account.server.routes');
    const passport = require('passport');
    const session = require('express-session');
    const flash = require('connect-flash');
      
module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);
  

  //initialize app
  var app = express();
  require("../controllers/account.server.controller");

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());
  app.use(express.urlencoded({extended: false}));
  app.use(session({
      secret: 'mysecretsession',
      resave: false,
      saveUninitialized: false
  }));
  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use((req, res, next) => {
      app.locals.signupMessage = req.flash('signupMessage');
      app.locals.signinMessage = req.flash('signinMessage');
      app.locals.user = req.user;
      next();
  });

  /**TODO
  Serve static files */
  //app.use('/', express.static(__dirname + '/../../client'));
  //app.use('/public', express.static(__dirname + '/../../public'));
  app.use(express.static('client'));

  /**TODO 
  Use the listings router for requests to the api */
  app.use('/orders', ordersRouter);
  app.use('/account', accountRouter);

  app.get('/signup', function(req, res, next){
    res.sendFile(path.resolve(__dirname + '/../../client/register.html'));
  });

  /**TODO 
  Go to homepage for all routes not specified */ 
    //app.use(function(request, response, next){
    app.use('/', express.static('client/index.html'));
    
    //return response.redirect('/');
    //next();
  //});
  
  return app;
};  
