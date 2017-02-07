$(document).ready(function() {
    var username = $("#username").val();

    $("form#loginform").submit(function(event) {
        event.preventDefault();

        $("li #name").text(username);
        $("#signup-btn #login-btn").hide();

    })
})
