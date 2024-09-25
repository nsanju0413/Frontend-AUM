"use strict";

// Define a function to get an HTML element
function getElement(selector) {
  return document.querySelector(selector);
}

// Define a function to validate an email input
function validateEmail(input, errorElement, checkAgainst) {
  const value = input.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (value === "") {
    errorElement.textContent = "Email is required.";
    errorElement.setAttribute("aria-invalid", "true");
    return false;
  } else if (!emailRegex.test(value)) {
    errorElement.textContent = "Invalid email address.";
    errorElement.setAttribute("aria-invalid", "true");
    return false;
  } else if (checkAgainst && value !== checkAgainst.value.trim()) {
    errorElement.textContent = "Emails must match.";
    errorElement.setAttribute("aria-invalid", "true");
    return false;
  } else {
    errorElement.textContent = "";
    errorElement.setAttribute("aria-invalid", "false");
    return true;
  }
}

// Define a function to handle the click event of the Join button
function joinButtonClick(event) {
  const emailInputs = document.querySelectorAll(".email-input");
  const emailErrors = document.querySelectorAll(".email-error");

  let isValid = true;

  emailInputs.forEach((input, index) => {
    const errorElement = emailErrors[index];
    const checkAgainst = index === 0 ? null : emailInputs[0];

    isValid = validateEmail(input, errorElement, checkAgainst) && isValid;
  });

  if (!isValid) {
    event.preventDefault();
  }
}

// Add code that's run when the web page is loaded
document.addEventListener("DOMContentLoaded", () => {
  const joinButton = getElement("#join_button");
  joinButton.addEventListener("click", joinButtonClick);
});
