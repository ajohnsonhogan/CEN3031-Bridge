
/* Dependencies */
var mongoose = require('mongoose'), 
    Orders = require('../models/orders.server.model.js');

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
  var order = new Orders(req.body);

 /* save the coordinates (located in req.results if there is an address property) */
  if(req.results) {
      order.name = req.results.name
      order.email = req.results.email
      order.address = req.results.address
      order.size = req.results.size
      order.medium = req.results.medium
      order.price = req.results.price
      order.image = req.results.image
      order.status = req.results.status
  }


  /* Then save the listing */
  order.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(order);
    }
  });
};

exports.updateStatusNew = function(req, res) {
  var order = Object.assign(req.order, req.body);

  order.status = "New";

  order.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(order);
    }
  });
};

exports.updateStatusOpen = function(req, res) {
  var order = Object.assign(req.order, req.body);

  order.status = "Open";

  order.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(order);
    }
  });
};

exports.updateStatusClosed = function(req, res) {
  var order = Object.assign(req.order, req.body);

  order.status = "Closed";

  order.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(order);
    }
  });
}


/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.listNew = function(req, res) {
  Orders.find({status: 'New'}, function (err, datak) {
	  if (err) {
		  res.status(400).send(err);
	  }
	  else{
		  res.json(datak);
	  }
  })
};

exports.listOpen = function(req, res) {
  Orders.find({status: 'Open'}, function (err, datak) {
    if (err) {
      res.status(400).send(err);
    }
    else{
      res.json(datak);
    }
  })
};

exports.listClosed = function(req, res) {
  Orders.find({status: 'Closed'}, function (err, datak) {
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
exports.orderByID = function(req, res, next, id) {
  Orders.findById(id).exec(function(err, order) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.order = order;
      next();
    }
  });
};
