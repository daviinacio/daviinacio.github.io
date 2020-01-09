angular.module('myApp').factory('discus', function(){
    var d = document, s = d.createElement('script');
    s.src = 'https://daviinacio.disqus.com/embed.js';
    s.setAttribute('data-timestamp', + new Date());
    (d.head || d.body).appendChild(s);

    function load(parameters){
        // Load the disqus script first time
        if(typeof DISQUS !== 'undefined'){
            DISQUS.reset({
                reload: true,
                config: parameters
            });
        }
    }

    return {
        load
    };
});