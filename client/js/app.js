/* register the modules the application depends upon here*/
angular.module('petree', []);
angular.module('accounts', []);

/* register the application and inject all the necessary dependencies */
var app = angular.module('petreeApp', ['petree',"accounts"]);
