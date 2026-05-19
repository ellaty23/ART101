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

// title button
$("#title").click(function () {

    let message = "<h3> Fun Facts </h3>";
    message = message + "<p> Click the buttons to learn more. </p>";
    message = message + "<br></br>";

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
    "<p> I am a " + mainEntity.type + ". </p>" +
    "<p> My mood is " + mainEntity.mood + ". </p>" +
    "<p> Am I moving?: " + mainEntity.isMoving + ". </p>" +
    "<p> My favorite element is " + currentFav + ". </p>" + "<br></br>";

    $("#environment-output").html(message);

});

// conditions button
$("#conditions").click(function () {

    message = "<h3> Conditions </h3>" +
    "<p> The sunlight zone has: </p>" +
    "<li> Lots of light </li>" +
    "<li> Warmer temperatures </li>" +
    "<li> Higher oxygen levels </li>" + "<br></br>";

    $("#environment-output").html(message);

});

// percent button
$("#percent").click(function () {

    message = "<h3> How Much? </h3>" +
    "<p> The sunlight zone is 2-3% of the ocean. </p>" + "<br></br>";

    $("#environment-output").html(message);

});

// depth button
$("#depth").click(function () {

    count = count + 1

    message = "<h3> How Deep? </h3>" +
    "<p> The sunlight zone is " + count + " feet deep. </p>" + "<br></br>";

    $("#environment-output").html(message);

});