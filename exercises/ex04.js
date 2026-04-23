let count = 0;

$("#needy-button").click(function () {

    count = count + 3;

    $("#needy-button").html("I have slept for " + count + " minutes")

});