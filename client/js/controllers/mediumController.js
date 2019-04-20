angular.module('petree').controller('mediumController', ['$scope', 'Mediums', 
  function($scope, Mediums) {

  Mediums.getMediums().then(function(response) {
    $scope.allMediums = response.data;
  }, function(error) {
    console.log('Unable to retrieve mediums:', error);
  });

  $scope.addMedium = function(newMedium) {
    Mediums.createMedium(newMedium).then(function(response) {
          window.location.reload();
      }, function(error) {
        console.log(error)
      });
    };

  $scope.removeMedium = function(medium) {
    Mediums.deleteMedium(medium._id).then(function(response) {
      $scope.allMediums.splice($scope.allMediums.indexOf(medium),1);  
    }, function(error) {
      console.log(error);
    });
  };

  $scope.mediumPrice= 0;
  $scope.sizePrice = 0;
  $scope.totalPrice = 0;
  $scope.strPrice = '0.01';

  $scope.setMedium = function(newMedium) {
    $scope.selectedMedium = newMedium;
    $scope.mediumPrice = newMedium.price;
    console.log($scope.totalPrice());
    mediumSelected = true;
    checkAllSelected();
  }

  $scope.setSize = function(newSize) {
    $scope.selectedSize = newSize;
    $scope.sizePrice = newSize.price;
    console.log($scope.totalPrice());
    sizeSelected = true;
    checkAllSelected();
  }

  $scope.$watch('selectedMedium', function() {
    if ($scope.selectedMedium != undefined) {
      $scope.mediumPrice = $scope.medium.price;
    }
    else {
      $scope.mediumPrice = 0;
    }
  });

  $scope.totalPrice = function () {
    return $scope.mediumPrice + $scope.sizePrice;
  };
  
  $scope.strPrice = function () {
    return ($scope.mediumPrice + $scope.sizePrice).toString(10);
  };
  

  Mediums.getSizes().then(function(response) {
    $scope.allSizes = response.data;
  }, function(error) {
    console.log('Unable to retrieve sizes:', error);
  });

  $scope.addSize = function(newSize) {
    Mediums.createSize(newSize).then(function(response) {
          // $scope.allMediums.push({'name':newMedium.name, 'price': newMedium.price});
          // newMedium.name='';
          // newMedium.price='';
          window.location.reload();
      }, function(error) {
        console.log(error)
      });
    };

  $scope.removeSize = function(size) {
    Mediums.deleteSize(size._id).then(function(response) {
      $scope.allSizes.splice($scope.allSizes.indexOf(size),1);  
    }, function(error) {
      console.log(error);
    });
  };


  }
]);
