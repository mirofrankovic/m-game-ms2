/**
   * Array with image source links to be retrieved and inserted into the HTML when cards are created
   */

const myCard =[
   "img1.jpg",
   "img2.jpg",
   "img3.jpg",
   "img4.jpg",
   "img5.jpg",
   "img6.jpg",
   "img7.jpg",
   "img8.jpg",
   "img9.jpg",
   "img10.jpg",
   "img11.jpg",
   "img12.jpg"
];

// Main menu section
const mainMenuSection = document.getElementById("main-menu-section");



// Game display section
const displayGame = document.getElementById("display-game");
const myPexeso = document.getElementById("my-pexeso");



// Game my level modal for easy and hard

const easyButton = document.getElementById("easy");
easyButton.addEventListener("click", function(){
   level("easy");
});

const hardButton = document.getElementById("hard");
hardButton.addEventListener("click", function(){
   level("hard");
});



// Highscores modal



// Game win modal


// Times up modal


// Clear confirmation modal





// ----------------------- Buttons
// Back to main menu buttons





// Audio buttons





// ----------------------- Audio
// Audio files




// Volume on/off toggle





// ----------------------- Game start

function startPexesoGame() {
   mainMenuSection.style.display = "flex";
   displayGame.style.display = "none";
}


// Create cards in game arena according to the selected level
// Hide main menu section and show game arena section
// Set and display points, level, timer, turn counter in their starting values
// Call functions to shuffle cards, start timer and active score system

let selectLevel;




// Shuffle cards before each game






// Add figure on the other side of card
// Check if one or two cards reversed
// Check if two cards are the same
// Add lock to prevent reverse more than 2 cards before check
// Update turn counter with every two cards reversed
// Call scoring function to add points when 2 cards match and subtract points when don't






// When 2 reversed cards match keep them on board
// Remove lock
// Update pairs variable and if 0 clear time interval
// Play finish audio when all pairs reversed





// When 2 reversed cards do not match restore them
// Remove lock




// Game timer
// Set interval
// Clear interval when times up or quit button hit
// Show times up modal when time = 0




// Score system
// Show game win modal when all pairs match



// Play again when times up





// Save score to local storage
// Show score in highscores modal



// console.log("hallo there it is miro");