angular.module('peetree', []).controller('orderController', function($scope) {

/* medium choices */ 
  $scope.mediumOptions = [];
  $scope.mediumOptions.push('Glossy');
  $scope.mediumOptions.push('Matte');
  $scope.mediumOptions.push('Something'); 
  $scope.model = {};

/* size choices */ 
  $scope.sizeOptions = [];
  $scope.sizeOptions.push('Small');
  $scope.sizeOptions.push('Medium');
  $scope.sizeOptions.push('Large'); 
  $scope.model = {};

  $scope.$watch('model.selectedMedium', function() {
         if ($scope.model.selectedMedium == "Glossy") {
            $scope.mediumPrice = 1;
        } else if ($scope.model.selectedMedium == "Matte") {
            $scope.mediumPrice = 2;
        } else if ($scope.model.selectedMedium == "Something") {
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

});
