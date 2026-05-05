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

$("#title").click(function () {

    let message = "<h3> Fun Facts </h3>";
    message = message + "<p> Click the buttons to learn more. </p>";
    message = message + "<br></br>";

    $("#environment-output").html(message);

});

$("#main-entity").click(function () {

    count = count + 1;

    if (count == 6) {
        count = 1;
    }

    let arrayPosition = count - 1;

    let currentFav = environmentElements[arrayPosition];

    message = "<h3> Main Entity </h3>";
    message = message + "<p> My name is " + mainEntity.name + ". </p>";
    message = message + "<p> I am an " + mainEntity.type + ". </p>";
    message = message + "<p> My mood is " + mainEntity.mood + ". </p>";
    message = message + "<p> Am I moving?: " + mainEntity.isMoving + ". </p>";
    message = message + "<p> My favorite element is " + currentFav + ". </p>";
    message = message + "<br></br>";

    $("#environment-output").html(message);

});

$("#conditions").click(function () {

    message = "<h3> Conditions </h3>";
    message = message + "<p> The twilight zone has: </p>";
    message = message + "<li> Low light </li>";
    message = message + "<li> Freezing temperatures </li>";
    message = message + "<li> High carbon dioxide storage </li>";
    message = message + "<br></br>";

    $("#environment-output").html(message);

});

$("#percent").click(function () {

    message = "<h3> How Much? </h3>";
    message = message + "<p> The twilight zone is 20% of the ocean. </p>";
    message = message + "<br></br>";

    $("#environment-output").html(message);

});

$("#depth").click(function () {

    depthCount = depthCount + 1

    message = "<h3> How Deep? </h3>";
    message = message + "<p> The twilight zone is " + depthCount + " feet deep. </p>";
    message = message + "<br></br>";

    $("#environment-output").html(message);

});

function askLight(light) {
    let userLight = prompt("Turn the lights on? Type yes or no.");
    if (userLight == light) {
        $("#output").html("See us shine!");
        document.getElementById("lanternfish").style.opacity = "1";
        document.getElementById("jellyfish").style.opacity = "1";
        document.getElementById("comb-jelly").style.opacity = "1";
        document.getElementById("coral").style.opacity = "1";
    }
    else {
        $("#output").html("Guess we'll stay in the dark.");
        document.getElementById("lanternfish").style.opacity = "0.25";
        document.getElementById("jellyfish").style.opacity = "0.25";
        document.getElementById("comb-jelly").style.opacity = "0.25";
        document.getElementById("coral").style.opacity = "0.25";
    }
}

$("#bioluminescence-button").click(function () {
    askLight("yes");
});