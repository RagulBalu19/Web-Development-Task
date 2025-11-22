// Get form and input elements
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

// Email regex for basic validation
// Explanation: one or more non-space, non-@ chars + '@' + same + '.' + same
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Show error for a specific input
 */
function showError(inputElement, message) {
    const formGroup = inputElement.parentElement;
    const errorElement = formGroup.querySelector(".error-message");
    errorElement.textContent = message;
    inputElement.classList.add("input-error");
}

/**
 * Clear error for a specific input
 */
function clearError(inputElement) {
    const formGroup = inputElement.parentElement;
    const errorElement = formGroup.querySelector(".error-message");
    errorElement.textContent = "";
    inputElement.classList.remove("input-error");
}

/**
 * Validate all form fields.
 * Returns true if valid, else false.
 */
function validateForm() {
    let isValid = true;

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    // Validate Name
    if (nameValue === "") {
        showError(nameInput, "Name is required.");
        isValid = false;
    } else {
        clearError(nameInput);
    }

    // Validate Email
    if (emailValue === "") {
        showError(emailInput, "Email is required.");
        isValid = false;
    } else if (!emailRegex.test(emailValue)) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
    } else {
        clearError(emailInput);
    }

    // Validate Message
    if (messageValue === "") {
        showError(messageInput, "Message is required.");
        isValid = false;
    } else if (messageValue.length < 10) {
        showError(messageInput, "Message should be at least 10 characters.");
        isValid = false;
    } else {
        clearError(messageInput);
    }

    return isValid;
}

// Handle submit event
contactForm.addEventListener("submit", function (event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Hide previous success message (if any)
    successMessage.style.display = "none";
    successMessage.textContent = "";

    const isFormValid = validateForm();

    if (isFormValid) {
        // Simulate successful submission
        successMessage.textContent = "Thank you! Your message has been received.";
        successMessage.style.display = "block";

        // Clear the form fields
        contactForm.reset();
    }
});

// Optional: live validation on blur (when leaving the input)
[nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("blur", () => {
        validateForm(); // You could also validate each field individually
    });
});

// Handle Reset button: clear error & success messages
contactForm.addEventListener("reset", () => {
    // small delay so values clear first
    setTimeout(() => {
        clearError(nameInput);
        clearError(emailInput);
        clearError(messageInput);
        successMessage.style.display = "none";
        successMessage.textContent = "";
    }, 0);
});
