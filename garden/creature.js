$("#crAdd").click(function () {

    let crName = $("#crName").val();

    // test in console
    console.log(crName);

    if (crName.length > 2) {
        // add this name to a div with a bit of html code attached
        $("#creature-list").append("<div>" + crName + "</div>");
    }

    $("#crName").val(""); //write the value
    // $("#crName").val(); //retrieve the value

});