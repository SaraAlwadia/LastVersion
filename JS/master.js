const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function() {
    /*Active class**************************************************** */
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /**click event on toggle menu */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    });
    /*Active class**************************************************** */

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        //center: true,
        //nav: true,
        // navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // //chevron left and right
    // var leftArrow = $(".partener .fa-chevron-left"),
    //     rightArrow = $(".partener .fa-chevron-right");

    // function checkClient() {

    //     $('.partener-logo:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
    //     $('.partener-logo:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();

    // }

    // checkClient();

    // $(".partener i").click(function() {
    //     if ($(this).hasClass("fa-chevron-right")) {
    //         $(".partener .active").fadeOut(100, function() {
    //             $(this).removeClass("active").next(".partener-logo").addClass("active").fadeIn();
    //             checkClient();
    //         });
    //     } else {
    //         $(".partener .active").fadeOut(100, function() {
    //             $(this).removeClass("active").prev(".partener-logo").addClass("active").fadeIn();
    //             checkClient();
    //         });
    //     }
    // });


    // click to scroll top
    $('.move-up span').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
});