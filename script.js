document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must include '@' and '.'.");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Show feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#155724"; // dark green text
            feedbackDiv.style.backgroundColor = "#d4edda"; // light green background
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#721c24"; // dark red text
            feedbackDiv.style.backgroundColor = "#f8d7da"; // light red background
        }
    });
});
