angular.module('myApp').config(function($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider

    .when('/', {
        templateUrl : '/app/components/home/home.html',
        controller  : 'HomeController',
        reloadOnSearch: false,
        resolve: {
			// Learning articles
			// https://carlofontanos.com/angularjs-show-route-only-after-all-ajax-requests-are-resolved/
			// https://rafaell-lycan.com/2017/angular-tips-about-promises-and-http-service/

			data: ($http, $route) => {
                return $http.get('https://api.github.com/users/daviinacio').then((response) => {
                    return response.data;
                })
				.catch(function(err){
					return {
						name: "Offline",
						bio: "Was not possible get data from github api"
					};
				});
            }/*,
            api_apps: function($http, $route){
                return $http.get('https://api.daviapps.com/apps/5').then(function(response){
                    response.data;
                })
                .catch(function(err){
                    return {};
                });
            }*/
		}
    })
    .when('/blog', {
        templateUrl : '/app/components/blog/blog.html',
        controller  : 'BlogController',
        reloadOnSearch: false,
        resolve: {
			data: function($http, $route){
                return $http.get('https://api.daviapps.com/posts').then((response) => {
                    return response.data;
                })
                .catch((err) => {
                    return {};
                });
            }
		}
    })
    .when('/blog/:post', {
        templateUrl : '/app/components/blog/post.html',
        controller  : 'BlogController',
        reloadOnSearch: false,
        resolve: {
			data: function($http, $route){
                return $http.get('https://api.daviapps.com/posts/' + $route.current.params.post).then((response) => {
                    return response.data;
                })
                .catch((err) => {
                    return {};
                });
            }
		}
    })
    .when('/b/:post', {
        templateUrl : '/app/components/blog/post.html',
        controller  : 'BlogController',
        reloadOnSearch: false,
        resolve: {
			data: function($http, $route){
                return $http.get('https://api.daviapps.com/posts/' + $route.current.params.post).then((response) => {
                    return response.data;
                })
                .catch((err) => {
                    return {};
                });
            }
		}
    })
    .when('/projetos', {
        templateUrl : '/app/components/home/home.html',
        controller  : 'HomeController',
        reloadOnSearch: false,
    })
    .when('/404', {
        templateUrl : '/app/components/error/404.html',
        controller  : 'ErrorController',
        reloadOnSearch: false
    })
    // On not found route
    .otherwise({ redirectTo: '/404' });

    // Configure ajax loading
    $httpProvider.interceptors.push('ajax-services');
});
