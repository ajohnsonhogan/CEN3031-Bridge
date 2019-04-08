/* register the modules the application depends upon here*/
angular.module('peetree', []);
angular.module('accounts', []);

/* register the application and inject all the necessary dependencies */
var app = angular.module('peetreeApp', ['peetree',"accounts"]);