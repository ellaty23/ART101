let environmentTitle = "Twilight Zone";

let environmentElements = ["anglerfish", "comb jelly", "squid", "starfish", "lanternfish"];

let count = 0;
let depthCount = 649;

let mainEntity = {
    name: "Cuttlefish",
    type: "cephalopod",
    mood: "shy",
    isMoving: false,
    favoriteElement: environmentElements[1]
};

// button menu functions
$("#title").click(function () {

    let message = "<h3> Fun Facts </h3>" +
    "<p> Click the buttons to learn more. </p>" + "<br></br>";

    $("#environment-output").html(message);

});

$("#main-entity").click(function () {

    count = count + 1;

    if (count == 6) {
        count = 1;
    }

    let arrayPosition = count - 1;

    let currentFav = environmentElements[arrayPosition];

    message = "<h3> Main Entity </h3>" +
    "<p> My name is " + mainEntity.name + ". </p>" +
    "<p> I am an " + mainEntity.type + ". </p>" +
    "<p> My mood is " + mainEntity.mood + ". </p>" +
    "<p> Am I moving?: " + mainEntity.isMoving + ". </p>" +
    "<p> My favorite element is " + currentFav + ". </p>" + "<br></br>";

    $("#environment-output").html(message);

});

$("#conditions").click(function () {

    message = "<h3> Conditions </h3>" +
    "<p> The twilight zone has: </p>" +
    "<li> Low light </li>" +
    "<li> Freezing temperatures </li>" +
    "<li> High carbon dioxide storage </li>" + "<br></br>";

    $("#environment-output").html(message);

});

$("#percent").click(function () {

    message = "<h3> How Much? </h3>" +
    "<p> The twilight zone is 20% of the ocean. </p>" + "<br></br>";

    $("#environment-output").html(message);

});

$("#depth").click(function () {

    depthCount = depthCount + 1

    message = "<h3> How Deep? </h3>" +
    "<p> The twilight zone is " + depthCount + " feet deep. </p>" + "<br></br>";

    $("#environment-output").html(message);

});

// bioluminescence button function
function askLight(light) {
    let userLight = prompt("Turn the lights on? Type yes or no.");
    if (userLight == light) {
        // if user types "yes", characters light up
        $("#output").html("See us shine!");
        document.getElementById("lanternfish").style.opacity = "1";
        document.getElementById("jellyfish").style.opacity = "1";
        document.getElementById("comb-jelly").style.opacity = "1";
        document.getElementById("coral").style.opacity = "1";
    }
    // if user types "no", characters become dark
    else {
        $("#output").html("Guess we'll stay in the dark.");
        document.getElementById("lanternfish").style.opacity = "0.1";
        document.getElementById("jellyfish").style.opacity = "0.1";
        document.getElementById("comb-jelly").style.opacity = "0.1";
        document.getElementById("coral").style.opacity = "0.1";
    }
}

$("#bioluminescence-button").click(function () {
    askLight("yes");
});

// creature functions
let following = false;

// when creature is hovered over, produce thought
$("#cuttlefish").hover(
    function () {
        $("#thought").stop(true, true).fadeIn(300);
    },
    function () {
        $("#thought").stop(true, true).fadeOut(300);
    }
);

// when creature is clicked on, toggle ink class and switch following condition
$("#cuttlefish").click(function () {
    $(this).toggleClass("ink");
    following = !following;
});

// creature will follow cursor when following is true
$(document).mousemove(function (event) {
    if (following === true) {
        $("#thought").text("You made me ink!");
        $("#cuttlefish").css({
            left: event.pageX - 250,
            top: event.pageY - 150
        });
        $("#thought").css({
            left: event.pageX,
            top: event.pageY - 150
        });
    }
    else {
        $("#thought").text("Something is watching me...")
    }
});