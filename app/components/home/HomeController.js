angular.module('myApp').controller('HomeController', function($rootScope, $scope, $location, $http, profile, portfolio){

    // Holidays Decoration
    const today = new Date();
	const day = today.getDate();
	const month = today.getMonth() + 1;
	
	$scope.user = profile;
	$scope.is_christmas = (month == 12 && day > 10);

    // Portfolio
    $scope.portfolio = [];
    
    window.addEventListener('scroll', () => {
        document.querySelectorAll('#portfolio-container .row').forEach((element) => {
            if(window.pageYOffset >= (element.offsetTop - ((window.innerHeight / 4) * 4)))
            element.classList.add('active');
        });
    });
    
    console.log(portfolio);
    
    portfolio.forEach((project) => {
        // Join array to new line
        if(Array.isArray(project.text))
            project.text = project.text.join('\n\r');
        
        $scope.portfolio.push(project);
    });

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
                    text += 'o \"' + key + '\" é obrigatório<br />';
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
    };
});