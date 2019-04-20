angular.module('petree').controller('businessController', ['$scope', '$window','Orders', 
  function($scope, $window, Orders) {
	console.log("success");
    Orders.getNew().then(function(response) {
      $scope.newOrders = response.data;
    }, function(error) {
      console.log('Unable to retrieve orders:', error);
    });
	Orders.getOpen().then(function(response) {
      $scope.openOrders = response.data;
    }, function(error) {
      console.log('Unable to retrieve orders:', error);
    });
	Orders.getClosed().then(function(response) {
      $scope.closedOrders = response.data;
    }, function(error) {
      console.log('Unable to retrieve orders:', error);
    });
    
    $scope.markNew = function(id) {
      Orders.markNew(id).then(function(response) {
        $window.location.href = '/business.html';
      }, function(error) {
        console.log('Unable to mark order as new:', error);
      });
    };
    $scope.markOpen = function(id) {
      Orders.markOpen(id).then(function(response) {
        $window.location.href = '/business.html';
      }, function(error) {
        console.log('Unable to mark order as open:', error);
      });
    };	
    $scope.markClosed = function(id) {
		Orders.markClosed(id).then(function(response) {
        $window.location.href = '/business.html';
      }, function(error) {
        console.log('Unable to mark order as closed:', error);
      });
    };
	$scope.create = function(order) {
      Orders.create(order).then(function(response) {
        $window.location.href = '/';
      }, function(error) {
        console.log('Unable to create order:', error);
      });
    };
  
}
]);

