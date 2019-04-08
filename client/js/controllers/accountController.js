angular.module('accounts').controller('accountController', ['$scope', 'Accounts', 
  function($scope, Accounts) {

    $scope.detailedInfo = undefined;

    
    $scope.login = function(){
        var info = {
            "email": $scope.email,
            "password" : $scope.password
        };
           
        console.log($scope.email + " " + $scope.password);

        Accounts.login(info).then(function(err, response){
            if(err) throw err;
            else{
                console.log('success');
            }
        });

    };

    $scope.register = function(){
        var info = {
            "email": $scope.email,
            "password" : $scope.password
        };

        console.log($scope.email + " " + $scope.password);

        Accounts.register(info).then(function(err, response){
            if(err) throw err;
            else{
                console.log('success');
            }
        });

    };
    $scope.user = {
        email: function(newemail) {
            return arguments.length ? (_email = newemail) : _email;
    }
  };
}]);

       