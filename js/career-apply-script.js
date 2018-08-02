function uploadCVfocus(that) {
    //console.log(that.dataset.target);
    console.log(that);
    var resume = document.getElementById(that.dataset.target)
    resume.click();
    console.log(resume.files[0].name);
    that.value = resume.files[0].name;
}

$(document).ready(function () {
    var job_num = getURLParameter('job')-1;
    $.getJSON( "/mannan/json/job-listing.json", function (data) {
        document.getElementById('job_title').innerText = data[job_num].name;
        document.getElementById('job_experience').innerHTML = '<i class="fas fa-briefcase"></i> '+ data[job_num].experience+' Years';
        console.log(document.getElementById('job_description').innerHTML);
        document.getElementById('job_description').innerHTML = data[job_num].description;
    });
})