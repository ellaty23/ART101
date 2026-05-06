let environmentTitle = "Sunlight Zone";

let environmentElements = ["sea lion", "sea turtle", "sea grass", "clean water", "phytoplankton"];

let count = 0;

let mainEntity = {
    name: "Sea Lion",
    type: "mammal",
    mood: "playful",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

// button menu functions
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
    message = message + "<p> I am a " + mainEntity.type + ". </p>";
    message = message + "<p> My mood is " + mainEntity.mood + ". </p>";
    message = message + "<p> Am I moving?: " + mainEntity.isMoving + ". </p>";
    message = message + "<p> My favorite element is " + currentFav + ". </p>";
    message = message + "<br></br>";

    $("#environment-output").html(message);

});

$("#conditions").click(function () {

    message = "<h3> Conditions </h3>";
    message = message + "<p> The sunlight zone has: </p>";
    message = message + "<li> Lots of light </li>";
    message = message + "<li> Warmer temperatures </li>";
    message = message + "<li> Higher oxygen levels </li>";
    message = message + "<br></br>";

    $("#environment-output").html(message);

});

$("#percent").click(function () {

    message = "<h3> How Much? </h3>";
    message = message + "<p> The sunlight zone is 2-3% of the ocean. </p>";
    message = message + "<br></br>";

    $("#environment-output").html(message);

});

$("#depth").click(function () {

    count = count + 1

    message = "<h3> How Deep? </h3>";
    message = message + "<p> The sunlight zone is " + count + " feet deep. </p>";
    message = message + "<br></br>";

    $("#environment-output").html(message);

});