// store all creatures in an array

let allCreatures = [];

// functions
// function to grab data from the form
function getCreatureFromForm() {

    const freshCreature = {
        name: $("#crName").val(),
        color: $("#crColor").val(),
        eyesNum: $("#crEyesNum").val(),
        legsNum: $("#crLegsNum").val()
    };
    return freshCreature;
};

// the checks function
function isCreatureValid(creature) {
    if (creature.name === "") return false;
    if (creature.name.length > 12) return false;
    if (isNaN(creature.eyesNum) || creature.eyesNum > 5) return false;
    if (isNaN(creature.legsNum) || creature.legsNum > 5) return false;
    return true;
}

// functions add creature to the page
function renderCreature(creature) {

    let crEyesHtml = "";
    for (let i = 0; i < creature.eyesNum; i++) {
        crEyesHtml = crEyesHtml + "<div class='eye'>.</div>";
    }

    let crLegsHtml = "";
    for (let i = 0; i < creature.legsNum; i++) {
        crLegsHtml = crLegsHtml + "<div class='leg'> </div>";
    }

    const html = `
            <div class="creature">
                <div class="creature-body" style="background-color: ${creature.color}"> ${crEyesHtml} </div>
                <div class="creature-legs"> ${crLegsHtml} </div>
                <div class="creature-info"> ${creature.name} </div>
            </div>
        `;
    return html;
}

// append creature to the page
function addCreatureToDOM(creature) {
    const html = renderCreature(creature);
    $("#creature-list").append(html);
}

// the main brain
$("#crAdd").click(function () {

    // create creature object from the form inputs
    const newCreature = getCreatureFromForm();
    console.log(newCreature);

    // safety checks
    console.log(isCreatureValid(newCreature));
    if (isCreatureValid(newCreature) == false) { // true==false
        return; // stops the function which is "clicked" on
    }

    // add creature to the page
    addCreatureToDOM(newCreature);

    // save to the memory
    allCreatures.push(newCreature);

    // reset the form prepare for the next iteration
});

// // grab the value from the text input and assign it to a variable crName
// let crName = $("#crName").val();
// let crColor = $("#crColor").val();
// let crEyesNum = $("#crEyesNum").val();
// let crLegsNum = $("#crLegsNum").val();


// // test in console
// console.log(crName);
// console.log(crColor);
// console.log(crEyesNum);
// console.log(crEyesHtml);
// console.log(crLegsNum);
// console.log(crLegsHtml);

// // print things on the page
// if (crName.length > 2) {

// }

// // "<div>" + crName + crColor + crEyesNum + "</div>");

// $("#crName").val(""); //write the value
// // $("#crName").val(); //retrieve the value