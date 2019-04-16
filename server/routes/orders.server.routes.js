import IPNController from './controllers/ipnController.js';
/* Dependencies */
var orders = require('../controllers/orders.server.controller.js'), 
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
 
 function routes(app) {
  // ...

  // PayPal IPN endpoint
  app.post('/ipn', IPNController.index);
  
  // ...
}
 
 
 router.route('/getNew')
  .get(orders.listNew);
  
  router.route('/getOpen')
  .get(orders.listOpen);

 router.route('/getClosed')
  .get(orders.listClosed);

 router.route('/new/:orderId')
  .post(orders.updateStatusNew);

  router.route('/open/:orderId')
  .post(orders.updateStatusOpen);

  router.route('/closed/:orderId')
  .post(orders.updateStatusClosed);


/*
  The 'router.param' method allows us to specify middleware we would like to use to handle 
  requests with a parameter.

  Say we make an example request to '/listings/566372f4d11de3498e2941c9'

  The request handler will first find the specific listing using this 'listingsById' 
  middleware function by doing a lookup to ID '566372f4d11de3498e2941c9' in the Mongo database, 
  and bind this listing to the request object.

  It will then pass control to the routing function specified above, where it will either 
  get, update, or delete that specific listing (depending on the HTTP verb specified)
 */
router.param('orderId', orders.orderByID);

module.exports = router;
