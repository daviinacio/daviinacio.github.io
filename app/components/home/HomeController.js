angular.module('myApp').controller('HomeController', function($scope, $location, $http, data){
    $scope.user = data;

    const contactForm = document.querySelector('#contactForm');

    /*$('#contactForm').submit(function (e) {
        const values = $(e.target).serializeArray();
        console.log(values);

        return false;
    });*/


    /*contactForm.onsubmit = function(e){



        console.log('submit', $(e.target).serializeArray(), serialize(e.target));
        return true;
    }**/

    /*$('#contactForm').submit(function (e) {

        console.log($(this).serialize());
        //\return false;

        console.log(e);
        $http({
            url: 'https://api.daviapps.com/mailto/daviinacio',
            method: "POST",
            data: $(this).serialize()
        })
        .then(function(response) {
            console.log(response);
            // success
        }, 
        function(response) { // optional
            console.error(response);
            // failed
        });
        return false;
    });*/
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