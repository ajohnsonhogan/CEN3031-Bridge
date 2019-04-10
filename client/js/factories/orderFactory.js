angular.module('peetree').factory('Orders', function($http) {
  var methods = {
	getNew: function() {
      return $http.get('/orders/getNew');
    },
    getOpen: function() {
      return $http.get('/orders/getOpen');
    },
    
    getClosed: function() {
      return $http.get('/orders/getClosed');
    },
  
  markNew: function(id) {
    return $http.post('/orders/new/' + id);
    }, 
  markOpen: function(id) {
    return $http.post('/orders/open/' + id);
    }, 
  markClosed: function(id) {
    return $http.post('/orders/closed/' + id);
    },
  create: function(id) {
    return $http.post('/orders' , order);
    }

  };

  return methods;
});
