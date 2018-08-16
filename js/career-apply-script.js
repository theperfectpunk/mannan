function uploadCVfocus(that) {
    //console.log(that.dataset.target);
    console.log(that);
    var resume = document.getElementById(that.dataset.target)
    resume.click();
    $(resume).change(function () {
        console.log(resume.files[0].name);
        that.value = resume.files[0].name;
    })
}

$('form').submit(function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('apply_name', document.getElementById('apply_name').value);
    formData.append('apply_cname', document.getElementById('apply_cname').value);
    formData.append('apply_phone', document.getElementById('apply_phone').value);
    formData.append('apply_resume', document.getElementById('apply_resume').files[0]);
    formData.append('apply_cletter', document.getElementById('apply_cletter').value);
    $.ajax({
        method: "POST",
        url: "./php/apply.php",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            alert(data)
        },
        error: function (xhr, status, error) {
            alert(xhr.responseText);
        }
    });
})

$(document).ready(function () {
    var job_num = getURLParameter('job')-1;
    $.getJSON( "/mannan/json/job-listing.json", function (data) {
        document.getElementById('job_title').innerText = data[job_num].name;
        document.getElementById('job_experience').innerHTML = '<i class="fas fa-briefcase"></i> '+ data[job_num].experience+' Years';
        console.log(document.getElementById('job_description').innerHTML);
        document.getElementById('job_description').innerHTML = data[job_num].description;
    });
})