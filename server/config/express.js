var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
    config = require('./config'),
    ordersRouter = require('../routes/orders.server.routes');
    mediumsRouter = require('../routes/mediums.server.routes');
    sizesRouter = require('../routes/sizes.server.routes');
var adminconfig = "gPmtMcO9Jf3hNKS0zcMuH7NhkHKlmDPwJxzcKrlD";
    fileRouter = require('../routes/upload.server.routes');
      
module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));


  //body parsing middleware 
  app.use(bodyParser.json());
  app.use(cookieParser());

  //not new
  /**TODO
  Serve static files */
  //app.use('/', express.static(__dirname + '/../../client'));
  //app.use('/public', express.static(__dirname + '/../../public'));
  


  /**TODO 
  Use the listings router for requests to the api */
  app.use('/orders', ordersRouter);
  app.use('/mediums', mediumsRouter);
  app.use('/sizes', sizesRouter);
  app.use('/', fileRouter);
  // app.use('/routes', routes);
  //app.use('/routes', ipnRouter);
  app.use('/admin', function(req, res){
	 if(req.query.adminID == adminconfig){
			res.end("Admin");
	 }else{
		 res.end("User");
	 }
  });
  app.use('/business.html', function(req, res){
	  if(req.cookies.adminID == adminconfig){
		  res.sendFile(path.join(__dirname, '../../client', 'business.html'));
	  }else{
		  res.redirect('back');
	  }
  });
  app.use('/adminpage.html', function(req, res){
 	  if(req.cookies.adminID == adminconfig){
		  res.sendFile(path.join(__dirname, '../../client', 'adminpage.html'));
	  }else{
		  res.redirect('back');
	  } 
  });
     app.use(express.static('client'));
 
 


  /**TODO 
  Go to homepage for all routes not specified */ 
    //app.use(function(request, response, next){
    app.use('/', express.static('client/index.html'));
    
    //routes(app);
    //return response.redirect('/');
    //next();
  //});
  
  return app;
};  
