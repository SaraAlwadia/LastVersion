$(document).ready(function() {
    // On Click SignUp It Will Hide profile Form and Display setting Form
    $("#account-edit").click(function() {

        $("#first").slideUp("slow", function() {
            $("#second").slideDown("slow");
        });
    });

    // On Click save It Will Hide save Form and Display profile Form
    $("#save-changes").click(function() {
        $("#second").slideUp("slow", function() {
            $("#first").slideDown("slow");
        });
    });

    $("#cancel-changes").click(function() {
        $("#second").slideUp("slow", function() {
            $("#first").slideDown("slow");
        });
    });

    /************Toggle Menu*************ًo with 2 click !!!!!!!!!!!!!!!!!*/
    // $('.toggle-icons').click(function() {
    //     $('.nav-elements').toggle("fast");
    // });
    // //Hide dropdown on page click
    // $(document).on('click', function(e) {

    //     $('.nav-elements').hide();
    //     if (!$(".toggle-icons").is(e.target) && !$(".toggle-icons").has(e.target).length) {
    //         $('.nav-elements').hide("fast");
    //     }
    // });
    /*******************!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*******************/

});