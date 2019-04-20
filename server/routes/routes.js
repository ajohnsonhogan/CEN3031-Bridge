//import IPNController from './controllers/ipn.ctrl.js';

var IPNController = require('../controllers/ipn.ctrl.js'), 
    express = require('express'), 
    router = express.Router();

// function routes(app) {
  // ...

  // PayPal IPN endpoint
  router.route();
  app.post('/ipn', IPNController.index);
  
  // ...
//}

module.exports = router;
