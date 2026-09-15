






// WHEN square 1 is clicked:
//     Print "Square one was clicked!" in the console
//     Add the "white" CSS class to square 1

// WHEN square 2 is clicked:
//   "white" CSS class to square 2

// ✅WHEN square 3 is clicked:
// Change text square 3 to "three"

// ✅WHEN square 4 is clicked:
//  Change message
//  "This is the secret message for the 4th square."

// ✅WHEN square 5 is clicked:
//   "hidden" CSS class to square 5

// ✅WHEN square 6 is clicked:
//   "bordered" CSS class to square 6

// ✅WHEN square 7 is clicked:
//     Change 1's text to "Changed!"

// ✅WHEN square 8 is clicked:
//     Add "green" CSS  body

// ✅WHEN square 9 is clicked:
//     Add  "hidden" 




const squareOne = 
document.querySelector(".one");
const squareTwo = document.querySelector(".two");

const squareThree = document.querySelector(".three");

const squareFour = document.querySelector(".four");
const squareFive = document.querySelector(".five");

const squareSix = document.querySelector(".six");

const squareSeven = document.querySelector(".seven");
// finds the HTML element with the class of eight
const squareEight = document.querySelector(".eight");
// finds the HTML element with the class of nine
const squareNine = document.querySelector(".nine");

const gridContainer = document.querySelector(".grid-container");


function oneClicked() {
  
  console.log("Square one was clicked!");

  squareOne.classList.add("white");
}
function twoClicked() {

  squareTwo.classList.add("white");
   console.log("Square two was clicked!");
  console.log(squareTwo)
}
function threeClicked() {
  squareThree.textContent = "three";
   console.log("Square 3 was clicked!");
}

function fourClicked() {
  message.textContent = "This is the secret message for the 4th square.";
   console.log("Square 4 was clicked!");
}


function fiveClicked() {
  squareFive.classList.add("hidden");
   console.log("Square five was clicked!");
}



function sixClicked() {
  squareSix.classList.add("bordered");
   console.log("Square 6 was clicked!");
}


function sevenClicked() {
  squareOne.textContent = "Changed!";
   console.log("Square 7 was clicked!");
}

 
function eightClicked() {
  document.body.classList.add("green");
   console.log("Square 8 was clicked!");
}

function nineClicked() {
  gridContainer.classList.add("hidden");
   console.log("Square 9 was clicked!");
}

squareOne.addEventListener("click", oneClicked);
squareTwo.addEventListener("click", twoClicked);
squareThree.addEventListener("click", threeClicked);
squareFour.addEventListener("click", fourClicked);
squareFive.addEventListener("click", fiveClicked);
squareSix.addEventListener("click", sixClicked);
squareSeven.addEventListener("click", sevenClicked);
squareEight.addEventListener("click", eightClicked);
squareNine.addEventListener("click", nineClicked);