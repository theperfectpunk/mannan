var flag = 1;
var scrollPos;

$(document).ready(function () {
    $('.video-hero video')[0].play();
    //alert('page loaded');
    console.log($(window).scrollTop());
    /*$(window).scroll(function (event) {
        console.log(event.pageY);
        if(event.originalEvent.pageY>908) {
            $('nav').css('background-color', '#f5f5f5');
            $('.nav-link').css('color', '#000');
            $('.navbar-brand img').attr("src", "./img/logo-dark.png");
            flag = 0;
        } else {
            if(flag == 0) {
                $('nav').css('background-color', 'transparent');
                $('.nav-link').css('color', '#fff');
                $('.navbar-brand img').attr("src", "./img/logo-light.png");
            }
        }
    });*/

    var options = {
        strings: ["Formalising Innovation"],
        typeSpeed: 30,
        showCursor: false
    }

    $('#caption_heading').typed(options);

})

function bodyScroll () {
    console.log("hello");
}