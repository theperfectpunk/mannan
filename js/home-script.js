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
        strings: ["Formalising Innovation"],
        typeSpeed: 30,
        showCursor: false
    }

    $('#caption_heading').typed(options);

})

function bodyScroll () {
    scrollPos = $(window).scrollTop();
    viewportheightoffset = $(window).height() - 700;
    opacity = scrollPos/viewportheightoffset
    $('.video-hero').css("opacity", 1 - scrollPos/viewportheightoffset);
    if(scrollPos > 10) {
        //document.getElementById('mannan_svg').firstElementChild.style.width = "100vw"
        if(opacity>1) {
            $('nav').removeClass('navbar-dark');
            $('nav').addClass('navbar-light');
            $('nav').css('background-color', '#f5f5f5');
            $('.nav-link').css('color', '#000');
            $('.nav-link').css('border-color', '#000');
            $('.navbar-brand img').attr("src", "./img/logo-dark-nolabel.png");
            document.getElementsByTagName('nav')[0].style["box-shadow"] = "0px 25px 100px 0px rgba(0, 0, 50, 0.1)"
            flag = 0;
        } else {
            if(flag == 0) {
                $('nav').removeClass('navbar-light');
                $('nav').addClass('navbar-dark');
                $('nav').css('background-color', 'transparent');
                $('.nav-link').css('color', '#fff');
                $('.nav-link').css('border-color', '#fff');
                $('.navbar-brand img').attr("src", "./img/logo-light.png");
                document.getElementsByTagName('nav')[0].style["box-shadow"] = "none";
                flag = 1;
            }
        }
    } /*else {
        document.getElementById('mannan_svg').firstElementChild.style.width = "1200vw"
    }*/
}