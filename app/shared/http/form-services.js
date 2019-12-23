angular.module('myApp').factory('form', function(){
    console.log('teste 2');

    $('#contactForm').submit(function () {
        console.log('submit');
        return false;
    });


    return {
    }
});