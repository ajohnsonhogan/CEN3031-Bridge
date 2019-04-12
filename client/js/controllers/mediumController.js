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

  


  }
]);


angular.module('petree').controller('sizeController', ['$scope', 'Sizes', 
  function($scope, Sizes) {
    Sizes.getSizes().then(function(response) {
      $scope.allSizes = response.data;
    }, function(error) {
      console.log('Unable to retrieve sizes:', error);
    });

    Sizes.create().then(function(response) {
        $scope.allSizes.push({ 'name':$scope.name, 'price': $scope.price});
        $scope.name='';
        $scope.price='';
      }, function(error) {
        console.log(error)
      });
    }
]);
