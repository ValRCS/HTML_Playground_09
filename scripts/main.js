console.log("Going to alert something");
// we use Ctrl-/ to comment and uncomment
// alert("Hello RCS!");
// console.log("I have alerted, lets finish this");
// document.body.style.backgroundColor = "lightblue";
var a = 20;
var b = 30 - a;
var c = b * a;
console.log(a,b,c);

var myDiv = document.getElementById('output');
//Javascripts lets me add strings with numbers, 
// meaning JS converts number to sting then concatanetes two strings
myDiv.innerText = "MyVariables:" + a + " : " + b + " : " + c;

var myName = "Valdis";
var myStr = "My name is " + myName + " and I am well!";

myDiv.innerText = myStr;