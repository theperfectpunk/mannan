$(document).ready(function () {
    $('.collapse').on('hide.bs.collapse', function () {
        this.parentElement.firstElementChild.firstElementChild.lastElementChild.firstElementChild.className = "fas fa-plus";
    })
    $('.collapse').on('show.bs.collapse', function () {
        this.parentElement.firstElementChild.firstElementChild.lastElementChild.firstElementChild.className = "fas fa-minus";
    })
})