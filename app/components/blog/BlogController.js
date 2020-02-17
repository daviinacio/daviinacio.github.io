angular.module('myApp').controller('BlogController', function($scope, data, discus){
    $scope.data = data;
    console.log(data);

    discus.load({
        page: {
            url: "https://daviinacio.com.br/blog/" + data.post,
            identifier: data.post
        },
        language: 'pt'
    });
});
