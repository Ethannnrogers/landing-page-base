$(document).ready(function() {
    console.log("document ready");

    $("#cta").click(function() {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1400);
        $("#firstName").focus();
    });
});
    
