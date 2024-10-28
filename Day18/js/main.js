"use strict";

// Global variables
let randomNum = 0;
let tries = 0;

// Helper function to generate a random integer
const getRandomInt = (max = 10) => Math.floor(Math.random() * max) + 1;

// Function to display messages
const displayMessage = (message) => {
    document.querySelector("#message").textContent = message;
};

// Function to validate user input
const validateGuess = (guess) => {
    if (isNaN(guess)) {
        return "Not a valid number. Please enter a valid number.";
    }
    if (guess < 1 || guess > 10) {
        return "Invalid number. Enter a number between 1 and 10.";
    }
    return null; // No validation errors
};

// Function to handle guess submission
const guessClick = () => {
    const guessInput = document.querySelector("#number");
    const guess = parseInt(guessInput.value, 10);
    let message = validateGuess(guess);

    if (!message) {
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

    displayMessage(message);
};

// Function to reset the game
const resetGame = () => {
    randomNum = getRandomInt(10);
    tries = 0;
    displayMessage("Guess a number between 1 and 10.");
    document.querySelector("#number").value = ""; // Clear the input field
};

// Initialize the game and set up event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#guess").addEventListener("click", guessClick);
    document.querySelector("#play_again").addEventListener("click", resetGame);
    resetGame(); // Start the game on page load
});
