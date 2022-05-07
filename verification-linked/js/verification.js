$(document).ready(function() {
    $('#verify-btn').on('click', function() {
        $('.popup').fadeIn();
    });



    $('.exit').on('click', function() {
        $('.popup').fadeOut();
        $('.fadeout').fadeOut();
        $('.enter-code').fadeIn();

    });
});