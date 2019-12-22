var app = angular.module('myApp', ['ngRoute']);

app.run(function(){
    
    // Console alert
    if(window.console || "console" in window) {
        console.log("%c DaviApps", "color:darkcyan; font-size:50px;");
        console.log("%c This website was builded with AngularJS and MaterializeCSS", "color:#003087; font-size:12px;");
    }

    console.log("Run");

	$(document).contextmenu(function(){
        if(location.host.includes('gitpod') || location.host.includes('localhost')){
            console.info("Context menu allowd on development mode");
		    return true;
        }
		else {
            console.info("Context menu canceled");
		    return false;
        }
	});
});

app.controller('myAppCtrl', function($scope, $routeParams, $rootScope, $location, header){
    VanillaToasts.create({
        title: 'Bem-vindo ao meu site.',
        text: 'Veja meu portifólio e/ou entre em contato pelo formulário abaixo.',
        type: 'info', // success, info, warning, error   / optional parameter
        icon: 'https://avatars2.githubusercontent.com/u/19656901?v=4', // optional parameter
        timeout: 10000, // hide after 5000ms, // optional paremter
        callback: function() {  } // executed when toast is clicked / optional parameter
    });
    
    header.update();

    $scope.$on('$routeChangeSuccess', function(next, current){
        header.update();
    });
});


// TEMP
// function updateHeaderPosition(){
//     const header = document.querySelector('header');

//     if(location.pathname !== '/')
//         header.classList.add('top');
//     else
//         header.classList.remove('top');
// }