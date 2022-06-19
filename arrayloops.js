//Q1 Multidimensional  Array
Array.from(Array(2), () => new Array(4))

//Q2 
var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
var text2 = arr.map(e => e.join('    ')).join('   <br>  ');
document.write(text2);

//Q3
for(let i=1; i<=10; i++){
     document.write("<br>" +i);
}
document.write("<br><br>");

//Q4
let t = prompt("Enter a number to show its multiplication: ", 7);
let l = prompt("Enter the length of multiplication table: ", 10);
document.write("Multiplication Table of " +t);
document.write("<br>Length " +l);
document.write("<br>");
for (let i=1; i<=l; i++){
     let result = i * t;
     document.write("<br>");
     document.write(`${t} * ${i} = ${result}`);
}
document.write("<br><br>");

//Q5
fruits = ["apple", "banana", "mango", "orange", "strawberry"];
let f = fruits.join("<br>");
document.write(f);

for (element of fruits) {
    document.write("<br>Element at index " + fruits.indexOf(element)+" is "+element)
}

//Q6
let Cont = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
let Rev = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
let Even = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
let Odd = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ];
let Series = [ "2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k" ];
document.write("<br><br>Counting:<br><br>" +Cont);
document.write("<br><br>Reverse Counting:<br><br>" +Rev);
document.write("<br><br>Even:<br><br>" +Even);
document.write("<br><br>Odd:<br><br>" +Odd);
document.write("<br><br>Series:<br><br>" +Series);

//Q7
let A = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
const number = prompt('Welcome to ABC Bakery. What do you wantto order Sir/Maam? ', "Cookie");

  for (element of A) {
    console.log(A.indexOf(element), element) 
  }

if (A <= number) {
    document.write(number +" is available at index " + A.indexOf(number) + " in our bakery.");
  } else {
        document.write("We are Sorry. " + number +" is not available in our bakery.");
    }
    document.write("<br><br>");

//Q8
const arr2 = [24, 53, 78, 91, 12];
document.write("<br>Array Items:" + arr2);
const max = Math.max(...arr2);
document.write("<br>The largest number is " + max);
document.write("<br><br>");

//Q9
const min = Math.min(...arr2);
document.write("<br>The smallest number is " + min);
document.write("<br><br>");

//Q10
document.write("Table of 5: <br>");
for(let tb=1; tb<=100; tb++){
    let result = 5 * tb;
    document.write("&nbsp");
    document.write(`${result}`); 
}



