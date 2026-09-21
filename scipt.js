






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



// using DOM  method domecument object  model
// querySelector() to search the document and returns the first HTML element
// that matches each  class 
const squareOne = 
document.querySelector(".one");
const squareTwo = document.querySelector(".two");
const squareThree = document.querySelector(".three");
const squareFour = document.querySelector(".four");
const squareFive = document.querySelector(".five");
const squareSix = document.querySelector(".six");
const squareSeven = document.querySelector(".seven");
const squareEight = document.querySelector(".eight");
const squareNine = document.querySelector(".nine");

// Select the parent container that holds all of the square elements.
const gridContainer = document.querySelector(".grid-container");

// This function runs when the "click" event occurs on square 1
// each variable has an event attached
function oneClicked() {
  console.log("Square one was clicked!");
// classList.add() to apply the "white" CSS class to square 1
squareOne.classList.add("white");
}


// Adds a CSS class to change the appearance of square 2 using a function called twoClicked
function twoClicked() {
squareTwo.classList.add("white");
// Logs/ renders a message to confirm that the click event fired
   console.log("Square two was clicked!");
  console.log(squareTwo)
}

// Updates the text inside the square 3 element method to update text
function threeClicked() {
  squareThree.textContent = "three";
   console.log("Square 3 was clicked!");
}


// Updates/shows a separate message element in the DOM 
function fourClicked() {
  message.textContent = "This is the secret message for the 4th square.";
   console.log("Square 4 was clicked!");
}

// Hides square 5 by applying hidden
function fiveClicked() {
  squareFive.classList.add("hidden");
   console.log("Square five was clicked!");
}


//
// Applies a CSS class that adds a border style to square 6
function sixClicked() {
  squareSix.classList.add("bordered");
   console.log("Square 6 was clicked!");
}


// using text content property to update the text inside the element and render a message to the user
function sevenClicked() {

  squareOne.textContent = "Changed!";
   console.log("Square 7 was clicked!");
}

 
// 
// Changes the styling of the entire webpage through the body element.
function eightClicked() {
   // document.body targets the <body> element in the DOM.
  // Adding "green" changes the page background and renders square 8 was clicked
  document.body.classList.add("green");
   console.log("Square 8 was clicked!");
}
 
  // Hides the parent grid container/ hides all child square
function nineClicked() {
  // adds hidden class to parent container
  gridContainer.classList.add("hidden");
}
//   method that responds to an event "click" using addeventlistener when the event happens the function is triggered
squareOne.addEventListener("click", oneClicked);
squareTwo.addEventListener("click", twoClicked);
squareThree.addEventListener("click", threeClicked);
squareFour.addEventListener("click", fourClicked);
squareFive.addEventListener("click", fiveClicked);
squareSix.addEventListener("click", sixClicked);
squareSeven.addEventListener("click", sevenClicked);
squareEight.addEventListener("click", eightClicked);
squareNine.addEventListener("click", nineClicked);