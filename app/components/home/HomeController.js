angular.module('myApp').controller('HomeController', function($rootScope, $scope, $location, $http, data){

    // Holidays Decoration
    const today = new Date();
	const day = today.getDate();
	const month = today.getMonth() + 1;
	
	$scope.user = data;
	$scope.is_christmas = (month == 12 && day > 10);

    // Portifolio
    window.addEventListener('scroll', () => {
        document.querySelectorAll('#portifolio-container .row').forEach((element) => {
            if(window.pageYOffset >= (element.offsetTop - ((window.innerHeight / 4) * 3)))
            element.classList.add('active');
        });
    });

    $scope.portifolio = [
        {
            title: "JSnake",
            bunner_url: "https://daviinacio.com.br/JSnake/src/assets/img/bunner2.png",
            text: [
                '[JSnake](https://daviinacio.com.br/JSnake/) é uma réplica do cássico jogo de atari [Snake](https://en.wikipedia.org/wiki/Snake_(video_game_genre)) feito totalmente em [Javascript](https://pt.wikipedia.org/wiki/JavaScript").\n\r' +
                'A ideia inicial surgiu a partir dos videos do [FilipeDeschamps](https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw/) no youtube, onde ele mostra o passo-a-passo da construção de seu [Primeiro Jogo Multiplayer](https://github.com/filipedeschamps/meu-primeiro-jogo-multiplayer).\n\r' +
                'Baseado em um ambiente com dimenções 15x15, o desafio foi fazer um player, que antes era um simples quadrado, ganhar corpo e se movimentar pelo mapa.'
            ],
            demo_url: "https://daviinacio.com.br/JSnake/",
			tecnologies: [
				'JavaScript', 'HTML', 'CSS'
			]
        },
		{
            title: "White Led Digital Clock",
            bunner_url: "https://daviinacio.com.br/white_led_digital_clock/hardware/photos/20190105_220150-1.jpg",
            text: [
                '[White Led Digital Clock](https://daviinacio.com.br/white_led_digital_clock/) é um relógio digital construido com [Led SMD](), Difusor de TV LCD, Papelão e  outros componentes.\n\r' +
				'## Funcionalidades\n\r' +
				'- Mostra a hora atual\n\r' +
				'- Mostra a média da temperatura e humidade\n\r' +
				'- Brilho automatico do display\n\r' +
				'- Controle via Infra vermelho'
            ],
            doc_url: "https://daviinacio.com.br/white_led_digital_clock/",
			tecnologies: [
				'Arduino', 'C++', 'Eletrônica'
			]
        },
		{
            title: "Desenvolvendo Desenvolvedores",
            bunner_url: "https://daviinacio.com.br/desenvolvendo-desenvolvedores/thumb/logica_programacao.png",
            text: [
                'Essa página tem como objetivo apresentar alguns detalhes sobre o nosso projeto, “Desenvolvendo Desenvolvedores”, onde utilizaremos jogos como meio de ensino ao raciocínio lógico e programação. Com o avanço da tecnologia, cada vez mais temos que formar criadores ao invés de apenas consumidores digitais.'
            ],
            doc_url: "https://daviinacio.com.br/desenvolvendo-desenvolvedores/",
			tecnologies: [
				'HTML', 'CSS', 'JS', 'Construct2', 'Faculdade'
			]
        },
		{
            title: "Project Manager",
            bunner_url: "https://raw.githubusercontent.com/daviinacio/ProjectManager/master/Development%20print/print%2029.06.2017%2022.51.png",
            text: [
                'Gerenciador de projetos. Posibilita inicializar o ambiente de desenvolvimento a partir da execução de multiplos scripts.'
            ],
            doc_url: "https://github.com/daviinacio/ProjectManager",
			tecnologies: [
				'C#', 'Windows Form', 'Archived'
			]
        },
		{
            title: "Tic Tac Toe",
			bunner_url: "https://raw.githubusercontent.com/daviinacio/tictactoe/master/prototype/tictactoe_layout_prototype.gif",
            text: [
                'O objetivo da atividade é introduzir o aluno ao desenvolvimento de aplicativos Android stand alone para smatphones. Essa atividade tem como função básica exercitar a prática com os conhecimentos adquiridos e aplicados a um projeto e implementação de um aplicativo móvel simples voltados para a área de entretendimento como jogos do tipo puzzel ou players.'
            ],
			demo_url: "https://play.google.com/store/apps/details?id=com.daviapps.tictactoe",
			tecnologies: [
				'Android', 'Java', 'Google Play'
			]
        },
		{
            title: "Arduino Buffer",
			bunner_url: "/assets/img/arduino-3-16x9.png",
            text: [
                'Essa biblioteca é compativel com a arquitetura [Arduino](https://arduino.cc), e possibilita implementar, incrementar e obter médias de buffers.\n\r' +
				'Ideal para obter média de leitura de sensores.\n\r' +
				'## Funcionalidades\n\r' +
				'- Obter média do buffer'
            ],
			doc_url: "https://github.com/daviinacio/arduino-buffer",
			tecnologies: [
				'Arduino', 'C++', 'Library'
			]
        },
		{
            title: "JC Mecânica",
            text: [
                'Programa de cadastro para a oficina mecânica do josé carlos.'
            ],
            doc_url: "https://github.com/daviapps/JC_Mecanica",
			tecnologies: [
				'C#', 'Windows Form'
			]
        },
    ];

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
    };

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
