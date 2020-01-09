angular.module('myApp').controller('BlogController', function($rootScope, $scope, $location, $http, data){
    $scope.data = data;

    console.log(data);
});