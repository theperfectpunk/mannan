$(document).ready(function () {
    $('.card > .collapse').on('hide.bs.collapse', function () {
        this.parentElement.firstElementChild.firstElementChild.lastElementChild.firstElementChild.className = "fas fa-plus";
    })
    $('.card > .collapse').on('show.bs.collapse', function () {
        this.parentElement.firstElementChild.firstElementChild.lastElementChild.firstElementChild.className = "fas fa-minus";
    })
})