let count = 0;

let colors = ["Orchid", "Coral", "HotPink", "Plum"];

let colorCount = 0;

let mood = "neutral";

$("#needy-button").click(function () {

    count = count + 1;

    colorCount = count - 1;

    $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " - " + mood);

    $("body").css("background-color", colors[colorCount]);

    // if colorCount is equal to 4, reset colorCount to 0

    if (colorCount == 4) {
        colorCount = 0;
        console.log("it happened");
    }

    // if colorCount is "HotPink,"" write "notPink"

    if (colors[colorCount] == "HotPink") {
        $("#needy-button").after(" notPink ");
    }

    // if colorCount is "Orchid,"" write "hey Orchid"

    else if (colors[colorCount] == "Orchid") {
        $("#needy-button").after(" hey Orchid ");
    }

    // if colorCount is any other color, write "all other colors"

    else {
        $("#needy-button").after(" all other colors ");
    }

    // if count is less than 5, set mood to "fresh and happy"

    if (count < 5) {
        mood = "fresh and happy";
    }

    // if count is greater than or equal to 5 and less than 10, set mood to "keep pushing"

    else if (count >= 5 && count < 10) {
        mood = "keep pushing";
    }

    // if count is greater than 10, set mood to "so tired!"

    else {
        mood = "so tired!";
    }

    console.log(mood);

});