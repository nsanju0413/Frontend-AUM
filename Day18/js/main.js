"use strict";

// Global variables
let randomNum = 0;
let tries = 0;

// Helper function to generate a random integer
const getRandomInt = (max = 100) => Math.ceil(Math.random() * max);

// Function to update the label with user input
const setLabel = () => {
    const label = document.querySelector("#label");
    const textBox = document.querySelector("#text_box");
    label.textContent = `You entered: ${textBox.value}`;
};

// Function to handle guess submission
const guessClick = () => {
    const guessInput = document.querySelector("#number");
    const guess = parseInt(guessInput.value, 10);
    let message = "";

    if (isNaN(guess)) {
        message = "Not a valid number. Please enter a valid number.";
    } else if (guess < 1 || guess > 10) {
        message = "Invalid number. Enter a number between 1 and 10.";
    } else {
        tries++;
        if (guess < randomNum) {
            message = "Too small. Try again.";
        } else if (guess > randomNum) {
            message = "Too big. Try again.";
        } else {
            const lastWord = (tries === 1) ? "try" : "tries";
            message = `You guessed it in ${tries} ${lastWord}!`;
        }
    }

    document.querySelector("#message").textContent = message;
};

// Function to reset the game
const playAgainClick = () => {
    randomNum = getRandomInt(10);
    tries = 0;
    document.querySelector("#message").textContent = "Guess a number between 1 and 10.";
    document.querySelector("#number").value = ""; // Clear the input field
};

// Initialize the game and set up event listeners
document.addEventListener("DOMContentLoaded", () => {
    const showButton = document.querySelector("#show_button");
    showButton.addEventListener("click", setLabel);

    const guessButton = document.querySelector("#guess_button");
    guessButton.addEventListener("click", guessClick);

    const playAgainButton = document.querySelector("#play_again_button");
    playAgainButton.addEventListener("click", playAgainClick);

    playAgainClick(); // Start the game with a random number
});