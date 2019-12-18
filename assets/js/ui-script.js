let header = document.querySelector('header');
let header_sticky = header.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset >= header_sticky) {
        header.classList.add("top")
    } else {
        header.classList.remove("top");
    }
};