document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent form submission to perform validation
    event.preventDefault();

    // Get the values of the form fields
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const terms = document.getElementById('terms').checked;  // We use .checked for checkbox
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked'); // Get selected radio button

    // Error handling: validate the form fields
    let isValid = true;

    // Validate name
    if (name === "") {
        document.getElementById('name_error_msg').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('name_error_msg').style.display = "none";
    }

    // Validate surname
    if (surname === "") {
        alert("Please enter your surname");
        isValid = false;
    }

    // Validate email (simple check)
    if (email === "") {
        alert("Please enter your email");
        isValid = false;
    }

    // Validate mobile (10-digit check)
    const mobileRegex = /^[0-9]{10}$/;
    if (mobile === "" || !mobileRegex.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        isValid = false;
    }

    // Validate checkbox (terms and conditions)
    if (!terms) {
        alert("You must accept the Terms and Conditions.");
        isValid = false;
    }

    // Validate contact method radio button
    if (!contactMethod) {
        alert("Please select a contact method.");
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert("Form submitted successfully!");

        // Log selected radio button value
        console.log("Selected contact method:", contactMethod.value);

        // If you want to log the full form data (optional)
        console.log("Name:", name);
        console.log("Surname:", surname);
        console.log("Email:", email);
        console.log("Mobile:", mobile);
    }

    console.log('JavaScript Test');
});
