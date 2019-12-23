angular.module('myApp').factory('ajax-services', function($q, $rootScope, $location){
    return {
        request: function(config){
            //console.log('AJAX request', config);
            return config;
        },
        response: function(response){
            //console.log('AJAX response', response);
            return response;
        },
        requestError: function(config){
            //console.error('AJAX requestError', config);
            return $q.reject(config);
        },
        responseError: function(response){
            //console.error('AJAX responseError', response);

            if(response.config.ocult === true)
                return $q.reject(response);

            VanillaToasts.create({
                title: 'Ajax Response Error',
                text: '[' + response.config.url + ']<br />' + response.status + ': ' + response.data.message,
                type: 'error', // success, info, warning, error   / optional parameter
                //icon: 'https://avatars2.githubusercontent.com/u/19656901?v=4', // optional parameter
                timeout: 3000, // hide after 5000ms, // optional paremter
                callback: function() {  } // executed when toast is clicked / optional parameter
            });
            return $q.reject(response);
        }
    };
});