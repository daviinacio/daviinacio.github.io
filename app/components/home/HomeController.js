angular.module('myApp').controller('HomeController', ['$scope', '$location', function($scope, $location){
    $scope.message = 'Hello from HomeController';
    console.log("page/home");
}]);