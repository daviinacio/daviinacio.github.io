angular.module('myApp').controller('HomeController', ['$scope', '$location', function($scope, $location){
    $scope.message = 'Hello from HomeController on github pages';
    $scope.ondev = true;
    console.log("page/home");

    //$('body').$scope().ondev = true;
    //$('body').$scope().$apply();
}]);
