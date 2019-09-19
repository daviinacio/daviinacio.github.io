angular.module('myApp').config(function($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider

    .when('/', {
        templateUrl : '/app/components/home/home.html',
        controller  : 'HomeController',
        resolve: {
            init: function() {
              return function() {
                console.log('Loading Home');
              }
            }
          }
    })
    .when('/projetos', {
        templateUrl : '/app/components/home/home.html',
        controller  : 'HomeController',
    })

    /*.when('/apps', {
        templateUrl : '/app/components/apps/apps.html',
        controller  : 'AppsController'
    })

    .when('/apps/:appId', {
        templateUrl : '/app/components/apps/apps-detail.html',
        controller  : 'AppsController'
    })

    .when('/apps/:appId/download', {
        templateUrl : '/app/components/apps/apps-detail.html',
        controller  : 'AppsController'
    })

    .when('/blog', {
        templateUrl : '/app/components/blog/blog.html',
        controller  : 'BlogController'
    })

    .when('/blog/:postId', {
        templateUrl : '/app/components/blog/post.html',
        controller  : 'BlogController'
    })

    .when('/about', {
        templateUrl : '/app/components/about/about.html',
        controller  : 'AboutController'
    })

    .when('/opensource', {
        templateUrl : '/app/components/opensource/opensource.html',
        controller  : 'OpensourceController'
    })

    .when('/opensource/:platform/:project', {
        templateUrl : '/app/components/opensource/opensource.html',
        controller  : 'OpensourceController'
    })

    .when('/author/:authorId', {
        redirectTo: '/501',
        pathMatch: ''
    })

    // Error routes
    .when('/400', {
        templateUrl : '/app/components/errors/error.html',
        controller  : 'ErrorController'
    })
    .when('/401', {
        templateUrl : '/app/components/errors/error.html',
        controller  : 'ErrorController'
    })
    .when('/403', {
        templateUrl : '/app/components/errors/error.html',
        controller  : 'ErrorController'
    })
    .when('/404', {
        templateUrl : '/app/components/errors/error.html',
        controller  : 'ErrorController'
    })
    .when('/501', {
        templateUrl : '/app/components/errors/error.html',
        controller  : 'ErrorController'
    })*/

    // On not found route
    .otherwise({redirectTo: '/404'});
});
