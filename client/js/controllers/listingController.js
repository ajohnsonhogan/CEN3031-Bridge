angular.module('listings').controller('ListingsController', ['$scope', '$window','Listings', 
  function($scope, $window,Listings) {
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });
    $scope.detailedInfo = undefined;
    
      $scope.addListing = function(lis) {
      Listings.create(lis).then(function(response) {
        $window.location.href = '/';
      }, function(error) {
        console.log('Unable to add listing:', error);
      });
    };
    $scope.deleteListing = function(id) {
      Listings.delete(id).then(function(response) {
        $window.location.href = '/';
      }, function(error) {
        console.log('Unable to delete listing:', error);
      });
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
