// add creature to the garden
$("#crAdd").click(function () {

    // grab the value from the text input and assign it to a variable crName
    let crName = $("#crName").val();
    let crColor = $("#crColor").val();
    let crEyesNum = $("#crEyesNum").val();
    let crLegsNum = $("#crLegsNum").val();

    // let's construct HTML for eyes
    let crEyesHtml = "";
    for (let i = 0; i < crEyesNum; i++) {
        crEyesHtml = crEyesHtml + "<div class='eye'>.</div>";
    }

    // let's construct HTML for legs
    let crLegsHtml = "";
    for (let i = 0; i < crLegsNum; i++) {
        crLegsHtml = crLegsHtml + "<div class='leg'> </div>";
    }

    // test in console
    console.log(crName);
    console.log(crColor);
    console.log(crEyesNum);
    console.log(crEyesHtml);
    console.log(crLegsNum);
    console.log(crLegsHtml);

    // print things on the page
    if (crName.length > 2) {
        $("#creature-list").append(`
            <div class = "creature">
                <div class = "creature-body" style = "background-color: ${crColor}"> ${crEyesHtml} </div>
                <div class = "creature-legs"> ${crLegsHtml} </div>
                <div class = "creature-info"> ${crName} </div>
            </div>
            `);
    }

    // "<div>" + crName + crColor + crEyesNum + "</div>");

    $("#crName").val(""); //write the value
    // $("#crName").val(); //retrieve the value

});