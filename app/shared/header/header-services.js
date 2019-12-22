angular.module('myApp').factory('header', function(){
    const header = document.querySelector('header');
    const toast_container = document.querySelector('#vanillatoasts-container');
    let scroll_enabled = true;

    let header_sticky = header.offsetTop;

    function top(){
        header.classList.add('top');
        toast_container.classList.add('with-margin');
    }

    function bottom(){
        header.classList.remove('top');
        toast_container.classList.remove('with-margin');
    }

    function update(){
        if(location.pathname === '/' && window.pageYOffset <= header_sticky)
            bottom();
        else
            top();
    }

    // System events
    window.onscroll = function() {
        if(scroll_enabled)
            update();
    }


    return {
        top,
        bottom,
        update
    }
});