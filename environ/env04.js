let environmentTitle = "Twilight Zone";

let environmentElements = ["anglerfish", "comb jelly", "squid", "starfish", "cuttlefish"];

let count = 0;
let depthCount = 649;

let mainEntity = {
    name: "Starfish",
    type: "invertebrate",
    mood: "hungry",
    isMoving: false,
    favoriteElement: environmentElements[1]
};

// title button
$("#title").click(function () {

    let message = "<h3> Fun Facts </h3>" +
    "<p> Click the buttons to learn more. </p>" + "<br></br>";

    $("#environment-output").html(message);

});

// main entity button
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

// conditions button
$("#conditions").click(function () {

    message = "<h3> Conditions </h3>" +
    "<p> The twilight zone has: </p>" + "<li> Low light </li>"
    + "<li> Freezing temperatures </li>" +
    "<li> High carbon dioxide storage </li>" + "<br></br>";

    $("#environment-output").html(message);

});

// percent button
$("#percent").click(function () {

    message = "<h3> How Much? </h3>" +
    "<p> The twilight zone is 20% of the ocean. </p>" + "<br></br>";

    $("#environment-output").html(message);

});

// depth button
$("#depth").click(function () {

    depthCount = depthCount + 1

    message = "<h3> How Deep? </h3>" +
    "<p> The twilight zone is " + depthCount + " feet deep. </p>" + "<br></br>";

    $("#environment-output").html(message);

});

// bioluminescence button function
function askLight(light) {
    let userLight = prompt("Turn the lights on? Type yes or no.");
    // if user types "yes", characters light up
    if (userLight == light) {
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