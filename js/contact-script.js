$('#contactform').submit(function (e) {
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/mannan/php/contact_me.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("name="+this.elements["apply_name"].value+"&cname="+this.elements["apply_cname"].value+"&phone="+this.elements["apply_phone"].value+"&email="+this.elements["apply_email"].value+"&message="+this.elements["apply_message"].value);
    console.log(this.elements["apply_cname"].value);
});