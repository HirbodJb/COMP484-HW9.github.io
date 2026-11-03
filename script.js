// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"

// Creating a variable named date to use object Date
var date = new Date();

// These three lines add a zero at the beginning when a string has fewer than two characters.
var day = String(date.getDate()).padStart(2, "0");
var month = String(date.getMonth() + 1).padStart(2, "0");
var year = date.getFullYear();

/* 
date.getDate() gets the day of the month, such as 1.
String(...) converts that number into text: "1".
.padStart(2, "0") makes it at least two characters: "01" 
*/

document.getElementById("dateOutput").textContent = "Today is " + month + "/" + day + "/" + year;

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

var firstNumericString = "82";
var secondNumericString = "80";
var decimalString = "13.82";
var nonNumericString = "Hirbod";

// TODO:
// 2. For EACH variable:
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

// This takes the string and stores the number in a new variable. Keeping the original variable allows displaying both versions later.
var firstConvertedNumber = Number(firstNumericString);
var secondConvertedNumber = Number(secondNumericString);
var decimalConvertedNumber = Number(decimalString);
var nonNumericConvertedNumber = Number(nonNumericString);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

// ****** I COMBINED STEPS 2b, 2c, 3 AND 4 INTO THE FOLLOWING CODE: *******

// isNaN checks if the value is Not-a-Number (NaN). Returns true if it is NaN, false otherwise.
// Number.isInteger checks if the value is an integer. Returns true if it is an integer, false otherwise.
var firstValueResult =
    'Original value: "' + firstNumericString + '" ' +
    " &rarr; Converted: " + firstConvertedNumber +
    " &rarr; isNaN: " + Number.isNaN(firstConvertedNumber) +
    " &rarr; isInteger: " + Number.isInteger(firstConvertedNumber);

var secondValueResult =
    'Original value: "' + secondNumericString + '" ' +
    " &rarr; Converted: " + secondConvertedNumber +
    " &rarr; isNaN: " + Number.isNaN(secondConvertedNumber) +
    " &rarr; isInteger: " + Number.isInteger(secondConvertedNumber);

var decimalValueResult =
    'Original value: "' + decimalString + '" ' +
    " &rarr; Converted: " + decimalConvertedNumber +
    " &rarr; isNaN: " + Number.isNaN(decimalConvertedNumber) +
    " &rarr; isInteger: " + Number.isInteger(decimalConvertedNumber);

var nonNumericValueResult =
    'Original value: "' + nonNumericString + '" ' +
    " &rarr; Converted: " + nonNumericConvertedNumber +
    " &rarr; isNaN: " + Number.isNaN(nonNumericConvertedNumber) +
    " &rarr; isInteger: " + Number.isInteger(nonNumericConvertedNumber);

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

// This will place the combined results of the number conversions into the HTML element with id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML =
    "1) " + firstValueResult + "<br><br>" +
    "2) " + secondValueResult + "<br><br>" +
    "3) " + decimalValueResult + "<br><br>" +
    "4) " + nonNumericValueResult;

// ==========================
// Part 3: Math & Formatting
// ==========================

// 1. Create three equally weighted grade scores, each out of 100.
var firstScore = 82;
var secondScore = 90;
var thirdScore = 85;

// 2. Add the scores, then divide by the number of scores to find the average.
var totalScore = firstScore + secondScore + thirdScore;
var averageScore = totalScore / 3;

// 3. toFixed(2) rounds the average to two decimal places and returns a string.
// Keep averageScore as a number for any later calculations or comparisons.
var formattedAverage = averageScore.toFixed(2);

// 4. Build a string showing the original scores and calculated results.
var mathResults =
    "<strong>Grade Score Calculator</strong><br>" +
    "First score: " + firstScore + " / 100<br>" +
    "Second score: " + secondScore + " / 100<br>" +
    "Third score: " + thirdScore + " / 100<br><br>" +
    "Total score: " + totalScore + " / 300<br>" +
    "Average score: " + formattedAverage + " / 100 <br>";

// 5. Display the results on the page; innerHTML interprets the line breaks.
document.getElementById("mathOutput").innerHTML = mathResults;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)

/* This if/else statement checks if the average score is greater than or equal to 70 and displays a status message accordingly. */
if (averageScore >= 70) {
    document.getElementById("mathOutput").innerHTML +=
        "<br>Status: Passing <br>";
} else {
    document.getElementById("mathOutput").innerHTML +=
        "<br>Status: Not passing <br>";
}

/* This if/else statement checks if the total score is a perfect 300 and displays a message accordingly. */
if (totalScore === 300) {
    document.getElementById("mathOutput").innerHTML +=
        "<br>Perfect score! You earned all 300 points. <br>";
} else {
    document.getElementById("mathOutput").innerHTML +=
        "<br>You are " + (300 - totalScore) + " points below a perfect score. <br>";
}
