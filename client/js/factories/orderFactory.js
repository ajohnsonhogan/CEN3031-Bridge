angular.module('peetree').factory('Orders', function($http) {
  var methods = {
    getOpen: function() {
      return $http.get('/orders/open');
    },
    
    getComplete: function() {
      return $http.get('/orders/closed');
    },
  
  complete: function(id) {
    return $http.post('/orders/complete/' + id);
    }, 
  markShipped: function(id) {
    return $http.post('/orders/shipped/' + id);
    }, 
  reopen: function(id) {
    return $http.post('/orders/reopen/' + id);
    },
  create: function(id) {
    return $http.post('/orders' , order);
    }

  };

  return methods;
});
