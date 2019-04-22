angular.module('accounts').controller('accountController', ['$scope', 'Accounts', '$window', 
  function($scope, Accounts, $window) {

    $scope.detailedInfo = undefined;

    
    $scope.login = function(){
        var info = {
            "email": $scope.email,
            "password" : $scope.password
        };
           
        console.log($scope.email + " " + $scope.password);
        // window.location.href = "profile.html"

        Accounts.login(info).then(data => {
            if(data.status === 200){
            console.log('Data', data);
            window.location.href = "/";
            localStorage.setItem('email', $scope.email);
            }else{
                console.log('Data', data); 
            }
        }).catch(err => {
                // window.confirm("Invalid username or password");
                console.log("Invalid username or password");
        })
    };

    $scope.register = function(){
        var info = {
            "email": $scope.email,
            "password" : $scope.password
        };

        console.log($scope.email + " " + $scope.password);

        Accounts.register(info).then(data => {
            if(data){
            localStorage.setItem('email', $scope.email);
            window.location.href = "/profile.html";
            }
        }).catch(err => {
            if(err){
                window.confirm("Invalid username or password");
                console.log("Invalid username or password");
            }
        })

    };
    $scope.user = {
        email: function(newemail) {
            return arguments.length ? (_email = newemail) : _email;
    }
  };
}]);

       