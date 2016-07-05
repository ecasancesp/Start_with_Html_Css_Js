$(document).ready(function () {

    "use strict"; /* don't allow undefined variables */

    $("#submit").on("click", function() {
        var uIdea = $("#userIdea").val();
        var uDescrip = $("#userDescription").val();
        var lenIdea = $("#userIdea").val().length;
        var lenDesc = $("#userDescription").val().length;
        var save = "Saving...";

        if (lenIdea == 0) {
            if (lenDesc < 100) {
                alert("Idea missing \nCheck description requirement");
            }
            else{
                alert("Idea missing");
            }
        }
        else{
            if (lenDesc < 100) {
                alert("Check description requirement");
            }
            else{
                $("#saveEnd").val(save).show();
                $("#saveEnd").val(save).hide(3000);
                $("#table1").append ("<tr><td>"+ uIdea +"</td><td>"+ uDescrip +"</td></tr>");

                
            }
        }
    });
});