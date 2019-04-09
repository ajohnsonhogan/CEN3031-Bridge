angular.module('peetree', []).controller('orderController', function($scope) {

/* medium choices */ 
  $scope.mediumOptions = [];
  $scope.mediumOptions.push('Texture Fine Art Paper');
  $scope.mediumOptions.push('Velvet Fine Art Paper');
  $scope.mediumOptions.push('Watercolor Paper');
  $scope.mediumOptions.push('Premium Canvas Satin'); 
  $scope.mediumOptions.push('Premium Canvas Matte'); 
  $scope.mediumOptions.push('Canvas');
  $scope.mediumOptions.push('Enhanced Matte Posterboard'); 
  $scope.mediumOptions.push('Somerset Velvet');
  $scope.mediumOptions.push('Enhanced Adhesive Synthetic Paper');  
  $scope.model = {};

/* size choices */ 
  $scope.sizeOptions = [];
  $scope.sizeOptions.push('Small');
  $scope.sizeOptions.push('Medium');
  $scope.sizeOptions.push('Large'); 
  $scope.model = {};

  $scope.$watch('model.selectedMedium', function() {
         if ($scope.model.selectedMedium == "Textured Fine Art Paper") {
            $scope.mediumPrice = 1;
        } else if ($scope.model.selectedMedium == "Velvet Fine Art Paper") {
            $scope.mediumPrice = 2;
        } else if ($scope.model.selectedMedium == "Watercolor Paper - Radiant White") {
            $scope.mediumPrice = 3;
        } else {
            $scope.mediumPrice = 0;
        };
  });

  $scope.$watch('model.selectedSize', function() {
         if ($scope.model.selectedSize == "Small") {
            $scope.sizePrice = 1;
        } else if ($scope.model.selectedSize == "Medium") {
            $scope.sizePrice = 2;
        } else if ($scope.model.selectedSize == "Large") {
            $scope.sizePrice = 3;
        } else {
            $scope.sizePrice = 0;
        };
  });

  $scope.totalPrice = function () {
    return $scope.sizePrice + $scope.mediumPrice;
  };

  $scope.addMedium = function(){   
      $scope.mediumOptions.push($scope.newMedium);
      $scope.newMedium='';
    };
    

  $scope.addSize = function(){   
      $scope.sizeOptions.push($scope.newSize);
      $scope.newSize='';
    };

});


angular.module('peetree').controller('businessController', ['$scope', '$window','Orders', 
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

