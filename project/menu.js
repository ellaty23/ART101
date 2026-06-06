// button functions
let message = "<p> </p>" + "<br></br>";

$("#start").click(function () {
  document.body.style.backgroundImage = "url('test_bg.jpeg')";
  document.getElementById("menu").style.display = "none"

  var counter = setInterval(function () {
    lineNumber = (Math.floor(Math.random() * creatures.length))
    lineCreature = creatures[lineNumber];
    lineCount = lineCount + 1;
    if (lineCount == 8) {
      clearInterval(counter)
    }
  }, 1000);

  var lineImage = setInterval(function () {
    makeImage("platypus");
    makeImage("jackalope");
    makeImage("pegasus");
    makeImage("poodle");
    makeImage("snake");
    if (lineCount == 8) {
      clearInterval(lineImage)
    }
  }, 1000);
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var credits = document.getElementById("credits");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
credits.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let creatures = ["platypus", "jackalope", "pegasus", "poodle", "snake"];

let creatureCount = 0;

let lineNumber = Math.floor(Math.random() * creatures.length);

let lineCreature = creatures[lineNumber];

let lineCount = 0;

console.log(lineNumber);
console.log(lineCreature);

function makeImage(creatureToMatch) {
  // what the function actually does
  if (lineCreature == creatureToMatch) {
    $("#lineCreature").prepend("<img class = 'line' width=125 src='" + creatureToMatch + ".png'>");
  }
}

// document.body.style.backgroundImage = "url('jackalope.png')";

// setInterval(displayLineCreature, 1000)

// function displayLineCreature() {
//   document.getElementById("lineCreature").innerHTML += "Hello";
// }

// $("#image").click(function () {
//   makeImage("platypus");
//   makeImage("jackalope");
//   makeImage("pegasus");
//   makeImage("poodle");
//   makeImage("snake");
// });
