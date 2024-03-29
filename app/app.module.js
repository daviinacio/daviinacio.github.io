var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'hc.marked']);

app.config(['markedProvider', function (markedProvider) {
    markedProvider.setOptions({ gfm: true });
}]);

app.config(['markedProvider', function (markedProvider) {
    markedProvider.setRenderer({
        link: function(href, title, text) {
            return "<a href='" + href + "'" + (title ? " title='" + title + "'" : '') + " target='_blank' rel='noreferrer'>" + text + "</a>";
        }
    });
}]);

app.run(function($rootScope){    
    // Console alert
    if(window.console || "console" in window) {
        console.log("%c DaviApps", "color:darkcyan; font-size:50px;");
        console.log("%c This website was builded with AngularJS and MaterializeCSS", "color:#003087; font-size:12px;");
    }

    console.log("Run");
    
    document.addEventListener('contextmenu', function(event) {
        if(location.host.includes('gitpod') || location.host.includes('localhost')){
            console.info("Context menu allowed on development mode");
		    return true;
        }
		else {
            console.info("Context menu canceled");
		    return false;
        }
    }, true);

    if (location.hostname.indexOf('.com') === -1){
        $rootScope.isLocalhost = true;
        console.log("This application is on localhost");
    }
});

app.controller('myAppCtrl', function($scope, $routeParams, $rootScope, $location, header){
    //$('html, body').

    if(localStorage.getItem('show-welcome') !== 'false'){
        VanillaToasts.create({
            title: 'Bem-vindo ao meu site.',
            text: 'Veja meu portfólio e/ou entre em contato pelo formulário abaixo.',
            type: 'info', // success, info, warning, error   / optional parameter
            icon: 'https://avatars2.githubusercontent.com/u/19656901?v=4', // optional parameter
            timeout: 5000, // hide after 5000ms, // optional paramter
            callback: function() {
                // Disable welcome message
                localStorage.setItem('show-welcome', false);
            } // executed when toast is clicked / optional parameter
        });
    }
    
    header.update();

    $scope.$on('$routeChangeStart', function(next, current){
        const redirectTo = {
            "/tindev": "/Omnistack8"
        };

        Object.keys(redirectTo).forEach((key) => {
            if(location.pathname === key)
                location.pathname = redirectTo[key];
        });


        header.update();

        //document.querySelector('#wrap').style.opacity = 0;
        
        
        /*// Scroll
        if(window.location.hash) {
            var hash = window.location.hash;

            console.log(hash, $(hash))
            
            $('html, body').attr('scrollTop', $(hash).offset().top);

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 10, 'swing');
        }*/

        //$rootScope.ajaxLoadingFlag = true;
        //console.log('routeChangeStart', FADEOUT_DELAY);
        //$('main').animate({ opacity: 0 }, FADEOUT_DELAY);
        //$('footer').animate({ opacity: 0 }, FADEOUT_DELAY);
    });

    $scope.$on('$routeChangeSuccess', function(next, current){
        header.update();
        //document.querySelector('#wrap').style.opacity = 1;
        
        //$('main').animate({ opacity: 1 }, FADEIN_DELAY);
        //$('footer').animate({ opacity: 1 }, FADEIN_DELAY);
    });
});
