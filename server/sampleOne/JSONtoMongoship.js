'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Shipping = require('./Schemas.js'), 
    config = require('../config/config');
	
/* Connect to your database */

	
	mongoose.connect(config.db.uri);
	
	
fs.readFile( 'sampleOne.json', 'utf8' , function(err, data) {
  if (err) throw err;
  
  var part = JSON.parse(data);
  
  for(var i in part.entries){
	  var si = part.entries[i];
	  var newsheme = new Shipping(si);
	  newsheme.save(function(err){
		  if (err) throw err;
	  });
	  
  }
});


/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
