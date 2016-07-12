$(document).ready(function () {

    "use strict"; /* don't allow undefined variables */
     $('[data-toggle="tooltip"]').tooltip();

    function showModal(message){
      $('#alertMessage').html(message);
      $('#myModal').modal();
    }

    $("#submit").on("click", function(event) {
        event.preventDefault();
        var uIdea = $("#userIdea").val();
        var uDescrip = $("#userDescription").val();
        var lenIdea = uIdea.length;
        var lenDesc = uDescrip.length;
        var save = "Saving...";

        if (lenIdea === 0) {
            if (lenDesc < 100) {
              showModal('Idea missing \nCheck description requirement');
            }
            else{
              showModal("Idea missing");
            }
        }
        else{
            if (lenDesc < 100) {
              showModal("Check description requirement, Size should be great than 100. Current is: "+ lenDesc);
            }
            else{
                $("#table1 tbody").append ("<tr><td>"+ uIdea +"</td><td>"+ uDescrip +"</td></tr>");
                $("#userDescription").val('');
                $("#userIdea").val('');
            }
        }
    });
});
