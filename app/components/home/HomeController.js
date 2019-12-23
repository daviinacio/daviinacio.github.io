angular.module('myApp').controller('HomeController', function($rootScope, $scope, $location, $http, data){
    $scope.user = data;

    // Scroll
   /* if(window.location.hash) {
        var hash = window.location.hash;
        
        $('html, body').scrollTop = 

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 10, 'swing');
    }*/
    // Contact form
    const contactForm = document.querySelector('#contactForm');


    contactForm.onsubmit = function(e){
        // Local validation
        const data = $(e.target).serializeArray().reduce((obj, item) => {
            obj[item.name] = item.value;
            return obj;
        }, {});

        $('#contactForm *').prop("disabled", true);

        // Ajax request
        $http({
            url: e.target.action,
            method: e.target.method,
            data,
            ocult: true
        })
        .then(function(response) { // Success
            //console.log(response);
            // success
            VanillaToasts.create({
                title: response.data.message,
                text: 'Fique de olho na sua caixa de e-mail!<br />Que em breve eu irei entrar em contato..', 
                type: 'success',
                icon: '/assets/img/toast-emoji-success.png',
                timeout: 10000
            });

            // Clear input values
            document.querySelectorAll('#contactForm input[type=text], #contactForm textarea').forEach((input) => { 
                input.value = "";
            });

            $('#contactForm *').prop("disabled", false);
        }, 
        function(response) { // Error
            const { data } = response;
            var text = "";

            Object.entries(data).forEach(([key, value]) => {
                validation = value[0].split('.')[1];
                    
                if(validation == 'required')
                    text += 'o \"' + key + '\" é obrigarório<br />';
                else
                    text += 'o \"' + key + '\" é inválido<br />';
            });

            VanillaToasts.create({
                title: 'Verifique os dados inseridos!',
                text, type: 'error',
                icon: '/assets/img/toast-emoji-error.png',
                timeout: 3000
            });

            $('#contactForm *').prop("disabled", false);
        });
        return false;
    }

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