

angular.module('petree').controller('mediumController', ['$scope', 'Mediums', 
  function($scope, Mediums) {
    Mediums.getMediums().then(function(response) {
      $scope.allMediums = response.data;
    }, function(error) {
      console.log('Unable to retrieve mediums:', error);
    });

  $scope.addMedium = function(newMedium) {
    Mediums.createMedium(newMedium).then(function(response) {
         // $scope.allMediums.push({'name':newMedium.name, 'price': newMedium.price});
         // newMedium.name='';
         // newMedium.price='';
         window.location.reload();
      }, function(error) {
        console.log(error)
      });
    }

     $scope.removeMedium = function(medium) {
      Mediums.deleteMedium(medium._id).then(function(response) {
        $scope.allMediums.splice($scope.allMediums.indexOf(medium),1);  
      }, function(error) {
        console.log(error);
      });
    };


  }
])



angular.module('petree').controller('sizeController', ['$scope', 'Mediums', 
  function($scope, Sizes) {
    Sizes.getSizes().then(function(response) {
      $scope.allSizes = response.data;
    }, function(error) {
      console.log('Unable to retrieve sizes:', error);
    });

  $scope.addSize = function(newSize) {
    Sizes.createSize(newSize).then(function(response) {
         // $scope.allMediums.push({'name':newMedium.name, 'price': newMedium.price});
         // newMedium.name='';
         // newMedium.price='';
         window.location.reload();
      }, function(error) {
        console.log(error)
      });
    }

     $scope.removeSize = function(size) {
      Sizes.deleteSize(size._id).then(function(response) {
        $scope.allSizes.splice($scope.allSizes.indexOf(size),1);  
      }, function(error) {
        console.log(error);
      });
    };


  }
]);
