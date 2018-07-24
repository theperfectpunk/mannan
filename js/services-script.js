$(document).ready(function () {

    //set equal height and width columns

    $('.services_inner_container').height($('.services_inner_container').width());

    $(window).bind("resize", function () {
        $('.services_inner_container').height($('.services_inner_container').width());
    })
})