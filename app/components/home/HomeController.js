angular.module('myApp').controller('HomeController', function($scope, $location, data){
    //console.log("page/home");

	$scope.user = data;

	//$('title').html($scope.user.name);

});






















//console.log(github_user);

	//console.log(api_apps);

	/*$scope.user = $http({
		url: 'https://api.github.com/users/daviinacio',
		method: 'get',
		datatype: 'json'
	});
	$scope.$apply();

	console.log($scope.user);*/

	/*$.ajax({
		url: 'https://api.github.com/users/daviinacio',
		method: 'get',
		datatype: 'json',
		success: function(d){
			console.log(d);
			$scope.user = d;
			$scope.$apply();
		}
	});*/

    //$('body').$scope().ondev = true;
    //$('body').$scope().$apply();