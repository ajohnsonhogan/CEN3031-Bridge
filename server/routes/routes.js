import IPNController from './controllers/ipn.ctrl';

function routes(app) {
  // ...

  // PayPal IPN endpoint
  app.post('/ipn', IPNController.index);
  
  // ...
}

export default routes;
