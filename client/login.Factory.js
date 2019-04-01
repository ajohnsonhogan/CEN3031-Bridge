angular.module('accounts', []).factory('Accounts', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('/api/account');
    },
	
	create: function(listing) {
	  return $http.post('/api/account', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
       return $http.delete('/api/account/' + id);
    }
  };

  return methods;
});
