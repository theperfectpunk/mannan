$(document).ready(function () {

    //load video in safari
    document.getElementById('hero_video').load();

    $('.play_button').click(function () {
        var target = this.previousElementSibling;
        if(target.paused == true) {
            target.play();
            this.style.opacity = 0;
        } else {
            target.pause();
            this.style.opacity = 0.6;
        }
    })

    /*Array.prototype.forEach.call(document.getElementsByClassName('apply_button'), function (element) {
        element.addEventListener("click", function () {
            document.getElementById('animate-height').firstElementChild.firstElementChild.innerHTML = this.parentElement.parentElement.firstElementChild.innerText;
            //console.log(this.parentElement.parentElement.firstElementChild.innerText);
            $("html").animate({
                scrollTop: document.getElementById('animate-height').offsetTop - 100,
            }, 1000, function () {
                document.getElementById('animate-height').style["max-height"] = "1000px";
            });
        })

    });*/

})

/*function show_apply_form () {
    document.getElementById('resume_form_card').style.opacity = 1;
    document.getElementById('resume_form_card').style.transform = "none";
}

function hide_apply_form () {
    document.getElementById('resume_form_card').style.opacity = 0;
    document.getElementById('resume_form_card').style.transform = "translateX(45px)";
}*/