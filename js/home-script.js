var flag = 1;
var scrollPos;

$(document).ready(function () {
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
        strings: ["Lorem ipsum dolor sit amet"],
        typeSpeed: 30,
        showCursor: false
    }

    $('#caption_heading').typed(options);

})

function bodyScroll () {
    scrollPos = $(window).scrollTop();
    if(scrollPos > 10) {
        //document.getElementById('mannan_svg').firstElementChild.style.width = "100vw"
        if($(window).scrollTop()>908) {
            $('nav').removeClass('navbar-dark');
            $('nav').addClass('navbar-light');
            $('nav').css('background-color', '#f5f5f5');
            $('.nav-link').css('color', '#000');
            $('.nav-link').css('border-color', '#000');
            $('.navbar-brand img').attr("src", "./img/logo-dark.png");
            flag = 0;
        } else {
            if(flag == 0) {
                $('nav').removeClass('navbar-light');
                $('nav').addClass('navbar-dark');
                $('nav').css('background-color', 'transparent');
                $('.nav-link').css('color', '#fff');
                $('.nav-link').css('border-color', '#fff');
                $('.navbar-brand img').attr("src", "./img/logo-light.png");
                flag = 1;
            }
        }
    } /*else {
        document.getElementById('mannan_svg').firstElementChild.style.width = "1200vw"
    }*/
}