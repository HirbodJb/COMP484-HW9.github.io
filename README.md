# JavaScript Mini Demo — COMP 484 Homework 9

A webpage that demonstrates JavaScript built-in objects, number calculations, and conditional messages.

## GitHub Pages

https://hirbodjb.github.io/COMP484-HW9.github.io/ 

## Features

- Displays the current local date as `Today is MM/DD/YYYY`, with leading zeros for the month and day.
- Converts four original strings using `Number()` and displays whether each converted result is `NaN` or an integer.
- Calculates the total and average of three equally weighted grade scores, formatting the average to two decimal places.
- Uses two `if/else` statements to show whether the average meets a passing threshold of 70 and whether the total is a perfect 300.
- Uses CSS to display the sections as simple cards and adjust spacing for smaller screens.

## Built-in Objects and Methods Used

### Date

- `new Date()` creates an object containing the current date and time.
- `getDate()` gets the day of the month.
- `getMonth()` gets the month starting at zero; the code adds 1 to obtain the calendar month.
- `getFullYear()` gets the full year.

### String

- `String()` converts the month and day numbers into strings.
- `padStart(2, "0")` adds a leading zero when the month or day has only one digit.

### Number

- `Number()` converts the original strings into numbers, returning `NaN` for the nonnumeric string.
- `Number.isNaN()` checks whether a converted result is `NaN`.
- `Number.isInteger()` checks whether a converted result is an integer.
- `toFixed(2)` formats the numeric average as a string with exactly two decimal places.

### Browser DOM APIs

These browser features display the results on the page:

- `document.getElementById()` selects an element by its ID.
- `textContent` sets the date paragraph's text. Changes the text inside.
- `innerHTML` inserts the number and math results, including HTML line breaks.
- Using `innerHTML +=` appends the conditional messages to the existing math results.

## Screenshot

Screenshot path: `JavaScript_Mini_Demo.png` (in the repository root, alongside `index.html`).

## Reflection

The easiest part was creating the starting variables and adding the three grade scores together. The hardest part was combining the values and validation results into clear output on the webpage. I learned that the Date object provides separate methods for the month, day, and year, and that the month starts at zero. I learned that Number() converts numeric strings, Number.isNaN() and Number.isInteger() check the converted results, and toFixed() formats a number as text with decimal places. I also learned how to select HTML elements by their IDs and use textContent or innerHTML to display results, with += appending messages instead of replacing the existing content.

