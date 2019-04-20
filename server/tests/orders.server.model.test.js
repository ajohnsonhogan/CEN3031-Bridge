var should = require('should'), 
    mongoose = require('mongoose'), 
    Order = require('../models/orders.server.model'), 
    config = require('../config/config');

var order, id;

order =  {
  name: "Philippa Brown", 
  email: "iheartswe@ufl.edu",
  address: "432 NEWELL DR GAINESVILLE, FL 32611", 
  size: "10 in roll",
  medium: "Premium Canvas Matte",
  price: "$69",
  image: "fortunedotcom.files.wordpress.com/2015/10/ibm.jpg"

}

describe('Order Schema Unit Tests', function() {

  before(function(done) {
    mongoose.connect(config.db.uri);
    done();
  });

  describe('Saving to database', function() {
    /*
      Mocha's default timeout for tests is 2000ms. To ensure that the tests do not fail 
      prematurely, we can increase the timeout setting with the method this.timeout()
     */
    this.timeout(10000);

    it('saves properly when name, email, and address are provided', function(done){
        new Order({
            name: order.name, 
            email: order.email,
            address: order.address
        }).save(function(err, order){
            should.not.exist(err);
            id = order._id;
            done();
        });
    });

    it('saves properly when all properties provided', function(done){
        new Order(order).save(function(err, order){
            should.not.exist(err);
            id = order._id;
            done();
        });
    });

    it('throws an error when name not provided', function(done){
        new Order({
            email: order.email,
            address: order.address
        }).save(function(err){
            should.exist(err);
            done();
        })
    });

    it('throws an error when email not provided', function(done){
        new Order({
            name: order.name,
            address: order.address
            }).save(function(err){
            should.exist(err);
            done();
            })
    });

    it('throws an error when address not provided', function(done){
        new Order({
            name: order.name,
            email: order.email
            }).save(function(err){
            should.exist(err);
            done();
            })
    });

  });

  afterEach(function(done) {
    if(id) {
      Order.remove({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});