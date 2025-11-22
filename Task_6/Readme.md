This project is part of the **Web Development Internship – Task 6: Create a Contact Form and Validate Inputs Using JavaScript**.  
The goal is to build a simple contact form and perform **client-side validation** using JavaScript.

## 📌 Objective

- Build a contact form with fields: **Name, Email, Message, Submit**.
- Validate the inputs in the browser using JavaScript.
- Show user-friendly **error messages** when validation fails.
- Show a **success message** when the form is valid (no real backend call).

## 🧱 Project Structure

```text
task-6-contact-form/
│
├─ index.html   # HTML structure of the page and form
├─ style.css    # Styling for the layout, form, and messages
└─ script.js    # JavaScript validation and event handling
⚙️ Technologies Used
HTML5 – form elements and structure

CSS3 – layout, colors, spacing, responsive design

Vanilla JavaScript – form validation, DOM manipulation, regex

🚀 How to Run
Clone or download this repository.

Open the folder in your code editor (VS Code, etc.).

Open index.html in your browser (double-click or use Live Server).

Try submitting:

With empty fields.

With an invalid email.

With a short message.

See error messages below each input and the success message when all fields are valid.

✅ Validation Rules
Name

Must not be empty.

Email

Must not be empty.

Must match a basic email pattern using regex:

^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$

Message

Must not be empty.

Must be at least 10 characters long.

If any field is invalid, the form:

Shows a red error message under that field.

Adds a red border around the invalid input.

Prevents submission using event.preventDefault().

If all fields are valid:

A green success message is displayed at the top of the form.

The form fields are cleared using form.reset().

📚 Key Concepts Practiced
HTML form elements (<form>, <input>, <textarea>, <button>)

DOM selection and manipulation (document.getElementById, textContent, classList)

Event handling (submit, blur, reset)

event.preventDefault() to stop default form submission

Client-side validation using JavaScript

Email validation using regex

Displaying dynamic error and success messages

Basic form accessibility (label, aria-describedby, aria-live)
