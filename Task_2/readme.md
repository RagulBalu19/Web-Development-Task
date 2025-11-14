```markdown
# To-Do List Web App (Vanilla JavaScript)

A simple, accessible To-Do List web application built with **HTML**, **CSS**, and **Vanilla JavaScript**.  
This project demonstrates DOM manipulation, event handling, and basic UI interactions without any frameworks.

---

## Demo
- Add tasks using the input box and **Add Task** button (or press **Enter**).
- Click a task to mark it as completed (strikethrough).
- Click the **X** button to delete a task.

---

## Features
- Add new tasks
- Mark tasks complete (toggle)
- Delete tasks
- Keyboard support (press Enter to add)
- Basic accessibility improvements (`aria-*` attributes and visually-hidden labels)
- Clean, responsive layout for small screens

---

## Project Structure
```

todo-app/
├─ index.html        # Main HTML file
├─ style.css         # Styling for layout and components
└─ script.js         # JavaScript logic (add, complete, delete)

```

---

## How it works (brief)
1. **Read input:** JavaScript reads the value from the input `#taskinput`.
2. **Create task element:** When the user clicks "Add Task" or presses Enter, a `<li>` is created containing:
   - `<span class="task">` — the task text (click to toggle completed)
   - `<button class="delete">` — removes the task
3. **Append to list:** The new `<li>` is appended to `<ul id="tasklist">`.
4. **Interactions:** Clicking the task toggles `.completed`, applying the CSS strikethrough. Clicking the delete button removes the `<li>`.

---

## Installation & Usage
1. Clone or download this repository.
2. Open `index.html` in your browser (or use Live Server in VS Code for auto-reload).
3. Start adding tasks.

No build tools or dependencies required.

---

## Code notes & tips
- `script.js` includes a small `escapeHtml` helper (commented/available) to prevent HTML injection if you decide to enable it when inserting raw text into the DOM.
- The app currently stores tasks only in memory — refreshing the page will clear the list.

---

## Suggestions for improvements
- Persist tasks to `localStorage` so they survive page reloads.
- Add edit task functionality.
- Add task priority, categories or due dates.
- Add filters: All | Active | Completed.
- Replace delete text with an icon for a modern UI.
- Add animations (CSS transitions) for adding/removing tasks.

---

## Accessibility
- `aria-live="polite"` on the task list helps assistive tech announce updates.
- Inputs and controls use labels and `aria-label` attributes for clarity.
- `.visually-hidden` class used to hide labels visually but keep them available to screen readers.

---
