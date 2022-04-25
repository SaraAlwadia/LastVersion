$(document).ready(function() {

    // Dropdown toggle fuction
    $('.dropdown-toggle').click(function() {
        $('#myDropdown').toggle("fast");
    });
    // //Hide dropdown on page click
    // $(document).on('click', function(e) {

    //     $('#myDropdown').hide();
    //     if (!$(".dropdown-toggle").is(e.target) && !$(".dropdown-toggle").has(e.target).length) {
    //         $('#myDropdown').slideUp("fast");
    //     }
    // });

    /************Toggle Menu*************ً!!!!!!!!!!!!!!!!!*/
    $('.toggle-icons').click(function() {
        $('.nav-elements').toggle("fast");
    });


});