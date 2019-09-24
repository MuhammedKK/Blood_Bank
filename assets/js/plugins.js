$(function () {
    // Loading Page

    window.onload = function () {
        $('.spinner-box .pulse-container').fadeOut(600, function() {
            $(this).parent().fadeOut(800);
        });
    }
});