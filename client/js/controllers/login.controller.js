angular.module('accounts').controller('login.controller', ['$scope', '$window','Accounts', 
function(){
$window.location.href = '/profile.html';
}
  function($scope, $window,Accounts) {
    Accounts.getAll().then(function(response) {
      $scope.Accounts = response.data;
    }, function(error) {
      console.log('Unable to retrieve Accounts:', error);
    });
    $scope.detailedInfo = undefined;
    
      $scope.addListing = function(lis) {
      Accounts.create(lis).then(function(response) {
        $window.location.href = '/';
      }, function(error) {
        console.log('Unable to add listing:', error);
      });
    };
    $scope.deleteListing = function(id) {
      Accounts.delete(id).then(function(response) {
        $window.location.href = '/';
      }, function(error) {
        console.log('Unable to delete listing:', error);
      });
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.Accounts[index];
    };
  }
  
]);