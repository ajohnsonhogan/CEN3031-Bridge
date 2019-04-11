/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var orderSchema = new Schema({
  name: {
    type: String, 
    required: true
  }, 
  email: {
    type: String, 
    required: true, 
  }, 
  address: {
    type:String,
    required: true, 
  }, 
  size: String,
  medium: String,
  price: String,
  image: String,
  created_at: Date,
  status: String
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
orderSchema.pre('save', function(next) {
  var currentTime = new Date;
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Orders = mongoose.model('Orders', orderSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Orders;
