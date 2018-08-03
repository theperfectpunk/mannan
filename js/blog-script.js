$(document).ready(function () {

    //set equal height and width columns

    var colsize = $('.blog_grid > .col-md-6').width();
    if(window.innerWidth>576) {
        $('.blog_grid > .col-md-6').height(colsize);
        $('.blog_grid > .col-md-6 > .row').height(colsize/2);
    }

    $(window).bind("resize", function () {
        if(this.window.innerWidth) {
            colsize = $('.blog_grid > .col-md-6').width();
            $('.blog_grid > .col-md-6').height($(colsize));
            $('.blog_grid > .col-md-6 > .row').height(colsize/2);
        }
    })
})