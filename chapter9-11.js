//Question 1
var x = prompt("Write a city name where you want to visit?");
var reply = "Karachi";
if (x === reply) {
    alert("Welcome to city of lights");
}

//Question 2
var y = prompt("What is your gender?");
var m = "male";
var f = "female";
if (y === m) {
    alert("Good Morning Sir.");
}
else if (y === f) {
    alert("Good Morning Ma’am.");
}

//Question 3
var a = prompt("What's the color of traffic light you see?");
var r = "red";
var ye = "yellow";
var g = "green";
if (a === r) {
    alert("Must Stop");
}
else if (a === ye) {
    alert("Ready to move");
}
else if (a === g) {
    alert("Move now");
}

//Question 4
var a = prompt("Fuel in car?");
if (a < 0.25) {
    alert("Please refill the fuel in your car!");
}
else {
    alert("You have enough fuel to drive the car!")
}

//Question 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
//the alert message would be displayed

//Question 6
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
//the alert message would not be displayed

//Question 7
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
//two alert messages would be displayed of condition 2 and 4

//Question 8
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
//the alert messages would be displayed

//Question 9
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
//the alert messages would be displayed of true

//Question 10
if ("car" < "cat") {
    alert("car is smaller than cat");
}
//the alert messages would be displayed

//Marks Sheet using input variables
document.write("<h1>Marks Sheet</h1>");
let s1 = prompt("Please enter your 1st subject:", "English");
let s2 = prompt("Please enter your 2nd subject:", "Urdu");
let s3 = prompt("Please enter your 3rd subject:", "Maths");

let EMarks = 100;

function grade(p) {
    if (p >= 80) {
        document.write("<br> Grade: A-one");
    }
    else if (p >= 70) {
        document.write("<br> Grade: A");
    }
    else if (p >= 60) {
        document.write("<br> Grade: B");
    }
    else if (p < 60) {
        document.write("<br> Grade: Fail");
    }
}

function remarks(p) {
    if (p >= 80) {
        document.write("<br> Remarks: Excellent");
    }
    else if (p >= 70) {
        document.write("<br> Remarks: Good");
    }
    else if (p >= 60) {
        document.write("<br> Remarks: You need to improve");
    }
    else if (p < 60) {
        document.write("<br> Remarks: Sorry");
    }
}
let m1 = parseInt(prompt("Please enter your 1st subject marks:", 50));
let m2 = parseInt(prompt("Please enter your 2nd subject marks:", 50));
let m3 = parseInt(prompt("Please enter your 3rd subject marks:", 50));

let x = m1 + m2 + m3;
let h = EMarks + EMarks + EMarks;
let p = (x * 100) / h;
let mark1 = (m1 * 100) / EMarks;
let mark2 = (m2 * 100) / EMarks;
let mark3 = (m3 * 100) / EMarks;

document.write("<br><br>");


document.write("Subject" + " \xa0\xa0\xa0\xa0 " + "Total Marks"
    + " \xa0\xa0\xa0\xa0 " + "Obtained Marks"
    + " \xa0\xa0\xa0\xa0 " + "Percentage");

document.write("<br>" + s1 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "
    + EMarks + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  " +
    m1 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  " +
    mark1 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0");

document.write("<br>" + s2 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "
    + EMarks + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  " +
    m2 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  " +
    mark2 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0");

document.write("<br>" + s3 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "
    + EMarks + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 " +
    m3 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  " +
    mark3 + "%");

document.write("<br>" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"
    + (h) + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"
    + (x) + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"
    + (p) + "%");

document.write("<br><br>");
document.write("<br><br>");
document.write("Total Marks:" + h);
document.write("<br>Obtained Marks:" + x);
document.write("<br>Percentage:" + p + "%");
grade(p)
remarks(p)

//Random number
const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess the number between 1 & 10?');
if (gnum === num) {
    alert("Bingo! Correct answer.")
}
else if (gnum == num + 1) {
    alert("Close enough to the correct answer.")
}
else if (gnum == num - 1) {
    alert("Close enough to the correct answer.")
}
else {
    alert("Not matched, the number was: " + num)
}

//Divisible by 3
let variable = prompt("Enter a number to check?");
if (variable % 3 === 0) {
    alert("The given number is divisible by 3.");
}
else {
    alert("The given number is not divisible by 3.");
}

//Even or Odd
let eo = prompt("Enter a number to check?");
if (eo % 2 === 0) {
    alert("Even");
}
else {
    alert("Odd");
}

// Temperature
let T = prompt("Enter the level of Temperature:", 40);
if (T > 40) {
    document.write("<br> It is too hot outside.");
}
else if (T > 30) {
    document.write("<br> The Weather today is Normal.");
}
else if (T > 20) {
    document.write("<br> Today’s Weather is cool.");
}
else if (T > 10) {
    document.write("<br> OMG! Today’s weather is so Cool.");
}

// Calculator
const operation = prompt("Enter type of Operation (either +, -, *, / or % ):");
const value1 = parseInt(prompt("Enter First Number:", 40));
const value2 = parseInt(prompt("Enter Second Number:", 40));

let result;
if (operation == '+') {
    result = value1 + value2;
}
else if (operation === "-") {
    result = value1 - value2;
}
else if (operation === "*") {
    result = value1 * value2;
}
else if (operation === "/") {
    result = value1 / value2;
}
else if (operation === "%") {
    result = value1 % value2;
}
document.write(`${value1} ${operation} ${value2} = ${result}`);