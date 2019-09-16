function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "My " + myAdjective;
    result += " ";
    result += myNoun;
    result += " ";
    result += myVerb;
    result += " ";
    result += myAdverb;
    result += ".";
  
    var quickresult = "My " + myAdjective + " " + myNoun + " "
          + myVerb + " " + myAdverb + ".";
    // Your code above this line
   return result;
    // return "My " + myAdjective + " " + myNoun + " "
          + myVerb + " " + myAdverb + ".";
  //   return `My ${myAdjective} ${myNoun} ${myVerb} ${myAdverb}.`;
  
  }

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

myDiv.innerText = wordBlanks( "cat", "heavy", "chased", "mice");