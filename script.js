
// **** JavaScript Mini Demo - Part 1: Date Display ****
// =====================================================

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

document.getElementById("date-display").textContent = "Today is " + month + "/" + day + "/" + year;




// =====================================================