$(document).ready(function() {
    $('#loginForm').submit(function(ev) {
        //get user name and password
        var email = $('#loginForm').find('input[id="inputEmail"]').val();
        var password = $('#loginForm').find('input[id="inputPassword"]').val();
        //do validation and if not valid
        if (email==="mail@mail.com" && password==="ppp")
        {
            //show error
            $("#errorInLogin").show();
            // stop the form from submitting
            ev.preventDefault();
        }
        else
        {
            $("#errorInLogin").hide();
            //if valid hide error
            //alert (email);
            //alert (password);
        }
    });
});


