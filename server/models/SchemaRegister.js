/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var ShippingSchema = new Schema({
  Full_Name: {
    type: String, 
    required: true
  }, 
  Street_Address: {
    type: String, 
    required: true, 
  }, 
  City: {
	type: String, 
    required: true, 
  },
  State: {
	type: String, 
    required: true, 
  },
  Zip_Address: {
	type: String, 
    required: true, 
  },
  Phone_Number: {
	type: String, 
    required: true, 
  },
  created_at: Date,
  updated_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
ShippingSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Shipping = mongoose.model('Shipping', ShippingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Shipping;
