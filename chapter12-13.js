//UpperCase & LowerCase
var ch = prompt("Enter any character:", 40); 
if (ch >= "A" && ch <= "Z"){
    document.write(ch +" is an UpperCase character <br>");}
else if (ch >= "a" && ch <= "z"){
    document.write(ch +" is an LowerCase character <br>");}
else if (ch>=65 && ch<=90){
    document.write(ch +" is an UpperCase character <br>");}
else if (ch>=97 && ch<=122){
    document.write(ch +" is an LowerCase character <br>");}
else if (ch>=48 && ch<=57){
    document.write(ch +" is a digit <br>");}
else{
    document.write(ch +" is a special symbol <br>");}

//Larger Integer
        let v1 = prompt("Enter First Number:", 40);
        let v2 = prompt("Enter Second Number:", 40);
        if(v1 > v2){
            document.write("First Number is the biggest number");
        }
        else if(v1 < v2){
            document.write("Second Number is the biggest number");
        }
        else if(v1 == v2){
            document.write("Both are Equal Numbers");
        }

//Positive or negative
    let I1 = prompt("Enter any Number:", 40);
    if(I1 >= 1){
        document.write("The number is Positive");
    }
    else if(I1 <= -1){
        document.write("The number is Negative");
    }
    else if(I1 == 0){
        document.write("The number is Zero");
    }
 
//Vowel
function isVowel(argument){
    var text;
    var argument = argument.toLowerCase();
    var vowels = (['a','e','i','o','u']);
    for(var i=0; i<= vowels.length; i++){
        if(argument != vowels[i]){
            continue;
        }
        return true;
    }
    return false;
}
    var char = "A";
    if(isVowel(char)){
        document.write(char + " is a vowel<br>");
    }
    else{
        document.write(char + " is not a vowel<br>");
    }
    var char = "Z";
    if(isVowel(char)){
        document.write(char + " is a vowel");
    }
    else{
        document.write(char + " is not a vowel");
    }

// Password
var passset = "ashna";
var pass = prompt("Input you password!");
if (passset == pass) {
    alert("Correct! The password you entered matches the original password");
}else if (passset != pass){
    alert("Incorrect password");
}
else if (pass = null){
    alert("Please enter your password");
}

   // fixing the code
   var greeting;
   var hour = 13;
   if (hour < 18) {
       greeting = "Good day";
   }else{
       greeting = "Good evening";
   }
   alert(greeting);

   //Clock hours
time = 1900;
if(time >= 0000 && time < 1200){
    alert("Good Morning!");
}else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!");
}else if(time >= 1700 && time < 2100){
    alert("Good Evening!");
}else if(time >= 2100 && time < 2359){
    alert("Good Night!");
}