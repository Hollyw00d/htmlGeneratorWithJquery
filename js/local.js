$(function() {


    var textAddTest = "";

    $("#generate-email").on("click", function(event) {
        event.preventDefault();

        var textAddTest = $("#text-add-test").val();
        $("textarea").append("&lt;html&gt;" + textAddTest + "&lt;/html&gt;");

    });

    $("#reset").on("click", function(event) {
        event.preventDefault();
        $("textarea").html("");
        $("input").val("");

    });

});