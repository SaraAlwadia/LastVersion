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
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /**click event on toggle menu */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    });

    // owl-carousel
    //$('.owl-carousel').owlCarousel();
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        //dots: false,
        //nav: true,
        // navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();
});

// On Click SignUp It Will Hide Login Form and Display Registration Form
$("#signup").click(function() {

    $("#first").slideUp("slow", function() {
        $("#second").slideDown("slow");
    });
});
// On Click SignIn It Will Hide Registration Form and Display Login Form
$("#signin").click(function() {
    $("#second").slideUp("slow", function() {
        $("#first").slideDown("slow");
    });
});

//*********************************************************************** */
//Active Class does not work !!!!!!!


// $('button').click(function() {
//     $(button.active).removeClass(".active");
//     $(this).addClass(".active");
// });


$("#sign").on('click', 'button', function() {

    // remove classname 'active' from all li who already has classname 'active'
    $("#sign button.active").removeClass("active");
    // adding classname 'active' to current click li 
    $(this).addClass("active");
});
//*********************************************************************** */