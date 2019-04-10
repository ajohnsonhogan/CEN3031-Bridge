
/* Dependencies */
var mongoose = require('mongoose'), 
    Mediums = require('../models/mediums.server.model.js');

/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions, refer back to this tutorial 
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */

/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var medium = new Mediums(req.body);

    // medium.name = req.name;
    // medium.price = req.price;


  /* Then save the listing */
  medium.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(medium);
    }
  });
};


/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  Mediums.find({}, function (err, datak) {
	  if (err) {
		  res.status(400).send(err);
	  }
	  else{
		  res.json(datak);
	  }
  })
};

exports.delete = function(req, res) {
  var medium = req.medium;

  Mediums.findOneAndRemove({'_id' : medium._id},function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      console.log('Deleted!');
    }
    res.send(medium);
  });

  /** TODO **/
  /* Remove the article */
};

/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 */
exports.mediumByID = function(req, res, next, id) {
  Mediums.findById(id).exec(function(err, medium) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.medium = medium;
      next();
    }
  });
};
