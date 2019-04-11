
/* Dependencies */
var mongoose = require('mongoose'), 
    Sizes = require('../models/sizes.server.model.js');

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
  var size = new Sizes(req.body);

 /* save the coordinates (located in req.results if there is an address property) */
  if(req.results) {
      size.name = req.results.name
      size.price = req.results.price
  }


  /* Then save the listing */
  size.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(size);
    }
  });
};


/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  Sizes.find({}, function (err, datak) {
    if (err) {
      res.status(400).send(err);
    }
    else{
      res.json(datak);
    }
  })
};

/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 */
exports.sizeByID = function(req, res, next, id) {
  Sizes.findById(id).exec(function(err, size) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.size = size;
      next();
    }
  });
};
