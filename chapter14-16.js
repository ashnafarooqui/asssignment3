//Array
//Q1
var studentNames = [];

//Q2
var studentNames =  new Array(20);

//Q3
var String = ["ab", "cd", 1, 2];

//Q4
var Numbers = [1,2,3,4,5];

//Q5
var Boolean = [true, false];

//Q6
var MixedArray = ["Apple", 1 , 2 , "Banana", true];
document.write(MixedArray + "<br>");

//Q7
var Qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
let text = "<ol>";
Qualifications.forEach(qual);
text +="</ol>";
function qual(value){
    text += "<li>" + value + "</li>";
}
document.write("<h1>Qualifications</h1><br>"+ text);

//Q8
var std = ["Habib", "Shizal", "Sabila"];
var score = [450 , 460 , 455];
var Tmarks = 500;

let p1 = (score[0]*100)/Tmarks;
let p2 = (score[1]*100)/Tmarks;
let p3 = (score[2]*100)/Tmarks;

document.write("Score of " + std[0] + " is " + score[0] + ".<br> Percentage:" + p1 + "%");
document.write("<br>Score of " + std[1] + " is " + score[1] + ".<br> Percentage:" + p2 + "%");
document.write("<br>Score of " + std[2] + " is " + score[2] + ".<br> Percentage:" + p3 + "%");

//Q9 Color Names
//Color at beginning
var colorNames = ["Pink", "Black", "White", "Green"];
var inputColor = prompt("Enter a color name that you want to add in the beginning?", "yellow");
colorNames.unshift(inputColor);
document.write(colorNames);

//At the end of an array
var inputColor1 = prompt("Enter a color name that you want to add in the beginning?", "yellow");
colorNames.push(inputColor1);
document.write("<br>"+ colorNames);

//two or more to the beginning of array
var inputColor3 = prompt("Enter a color name that you want to add in the beginning?", "yellow");
var inputColor4 = prompt("Enter a color name that you want to add in the beginning?", "yellow");
colorNames.unshift(inputColor3, inputColor4);
document.write("<br>"+colorNames);

//Delete the first color in array
colorNames.shift(inputColor);
document.write("<br>"+colorNames);

//Delete the last color in array
colorNames.pop(inputColor);
document.write("<br>"+colorNames);

//Color at beginning on desired position
var inputColor5 = prompt("Enter a color name that you want to add in the beginning?", "yellow");
var position = prompt("Enter index no?", 1);
colorNames.splice(position, 0, inputColor5);
document.write("<br>"+colorNames);

//delete color that you want
var index1 = prompt("Enter how many index you want to delete?", 1);
var index2 = prompt("Enter index no which you want to delete?", 1);
colorNames.splice(index1, index1);
document.write("<br>"+colorNames);

//Q10
var Scorestd = [320, 230, 480, 120];
document.write("Scores Of Students: " +Scorestd);
Scorestd.sort();
document.write("<br>Ordered Scores Of Students: " +Scorestd);

//Q11
var Cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities List: " +Cities);
var OrderedCities = Cities.slice(2, 4);
document.write("<br>Selected cities List: " +OrderedCities);

//Q12
var arr = ["This ", " is ", " my ", " cat"];
document.write("<h1>Array</h1><br>"+ arr);
var text1 = arr.join("  ");
document.write("<h1>String</h1><br>"+ text1);

//Q13
var Devices = ["Keyboard ", " Mouse ", " Printer ", " Monitor"];
document.write("<h1>Devices: </h1><br>"+ Devices);
var text2 = Devices.join(" <br>Out:<br>  ");
document.write("<br><br>Out:<br>"+ text2);

//Q14
var Devices = ["Keyboard ", " Mouse ", " Printer ", " Monitor"];
document.write("<h1>Devices: </h1><br>"+ Devices);
Devices.reverse();
var text3 = Devices.join(" <br>Out:<br>  ");
document.write("<br><br>Out:<br>"+ text3);

//Q15
var Phone = ["Apple ", " Samsung ", " Motorola ", " Nokia ", " Sony " , " Haier"];
let arg = "<ul>";
Phone.forEach(argument);
arg +="</ul>";
function argument(value){
    arg += "<li>" + value + "</li>";
}
document.write("<h1>Phone Compamies</h1><br>"+ arg);










