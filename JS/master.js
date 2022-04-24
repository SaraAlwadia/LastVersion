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
    /************Active class*************/

    $(".nav-elements").on('click', 'a', function() {

        // remove classname 'active' from all li who already has classname 'active'
        $(".nav-elements a.active").removeClass("active");
        // adding classname 'active' to current click li 
        $(this).addClass("active");
    });



    /************Active class*************/

    /************ owlCarousel *************/


    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        //center: true,
        nav: true,
        // navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    /************ owlCarousel *************/


    /******     On Click toggle between company and team partenership request***/
    $("#team").click(function() {

        $("#co-info").slideUp("slow", function() {
            $("#team-info").slideDown("slow");
        });
    });
    $("#co").click(function() {
        $("#team-info").slideUp("slow", function() {
            $("#co-info").slideDown("slow");
        });
    });

    /******************** Slider Gallery */ /////////////////

    function displyPackage() {
        var popup = document.getElementById("package-gallery1");
        popup.classList.toggle("show");
    }


    // click to scroll top
    $('.move-up span').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
});