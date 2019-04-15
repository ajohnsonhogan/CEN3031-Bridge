angular.module('petree').controller('orderController', function($scope) {

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

//   $scope.totalPrice = function () {
//     return $scope.sizePrice + $scope.mediumPrice;
//   };

  $scope.addMedium = function(){   
      $scope.mediumOptions.push($scope.newMedium);
      $scope.newMedium='';
    };
    

  $scope.addSize = function(){   
      $scope.sizeOptions.push($scope.newSize);
      $scope.newSize='';
    };
    
$scope.getTransactionID = function() {
	
	var pathArray = window.location.query.split('&');
	var secondLevelLocation = pathArray[2]; // the "tx=string"
	var tx = secondLevelLocation.split('=');
	$scope.tid = 'sampleTID';
	
	return $scope.tid;
}; 

});
