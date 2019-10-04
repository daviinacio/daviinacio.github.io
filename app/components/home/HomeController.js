angular.module('myApp').controller('HomeController', function($scope, $location, github_user){
    //console.log("page/home");
	
	$scope.user = github_user;
	
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