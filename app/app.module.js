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

app.controller('myAppCtrl',['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope){

}]);