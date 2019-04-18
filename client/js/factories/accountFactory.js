angular.module('accounts', []).factory('Accounts', function($http) {
  var methods = {
  login: function(credentials) {
      console.log(credentials);
      return $http.post('/account/signin', credentials);
    },
	
	register: function(credentials) {
	  return $http.post('/account/signup', credentials);
    }
    
  };

  return methods;
});