//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://root:password1@ds031671.mlab.com:31671/petree_prints', //place the URI of your mongo database here.
  }, 
  port: 8080
};


