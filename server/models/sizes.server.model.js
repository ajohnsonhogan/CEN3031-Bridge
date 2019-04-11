/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var sizeSchema = new Schema({
  name: String,
  price: String	
});


/* Use your schema to instantiate a Mongoose model */
var Sizes = mongoose.model('Sizes', sizeSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Sizes;
