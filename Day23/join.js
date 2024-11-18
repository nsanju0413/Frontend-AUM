document.getElementById('join-list-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email_address').value.trim();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const responseDiv = document.getElementById('response');

    // Validate inputs
    const errors = [];
    if (!validateEmail(email)) {
        errors.push("Invalid email address.");
    }
    if (!name) {
        errors.push("Name is required.");
    }
    if (!validatePhone(phone)) {
        errors.push("Invalid phone number. Use the format 999-999-9999.");
    }

    if (errors.length > 0) {
        responseDiv.innerHTML = errors.map(error => `<p class="text-danger">${error}</p>`).join('');
        return;
    }

    // If valid, send the data using Fetch API
    const formData = {
        email_address: email,
        name: name,
        phone: phone
    };

    fetch('submit.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        responseDiv.innerHTML = `<p class="text-success">${data.message}</p>`;
    })
    .catch(error => {
        responseDiv.innerHTML = `<p class="text-danger">An error occurred: ${error.message}</p>`;
    });
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Phone validation function
function validatePhone(phone) {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(phone);
}