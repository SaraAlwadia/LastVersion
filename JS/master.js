// const responsive = {
//     0: {
//         items: 1
//     },
//     320: {
//         items: 1
//     },
//     560: {
//         items: 2
//     },
//     960: {
//         items: 3
//     }
// }

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
        nav: true,
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

    // click to scroll top
    $('.move-up').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();
    
});