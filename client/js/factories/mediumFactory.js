angular.module('petree', []).factory('Mediums', function($http) {
  var methods = {    
    getMediums: function() {
      return $http.get('/mediums');
    },

    createMedium: function(medium) {
      return $http.post('/mediums', medium);
    },

    deleteMedium: function(id) {
      return $http.delete('/mediums/' + id);
    },

    getSizes: function() {
      return $http.get('/sizes');
    },

    createSize: function(size) {
      return $http.post('/sizes' , size);
    },

    deleteSize: function(id) {
      return $http.delete('/sizes/' + id);
    }

  };

  return methods;
});
