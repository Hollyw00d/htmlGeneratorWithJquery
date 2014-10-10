$(function() {


    var textAddTest = "";

    $("#generate-email").on("click", function(event) {

        event.preventDefault();
        //$("textarea").append("Blah");

        var textAddTest = $("#text-add-test").val();

        $("textarea").append("&lt;html&gt;" + textAddTest + "&lt;/html&gt;");


    });

});