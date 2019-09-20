const gObj = {
      "hat": "ballcap",
      "shirt": "jersey",
      "shoes": "cleats"
    };

const myStorage = {
      "car": {
        "inside": {
          "glove box": "maps",
          "passenger seat": "crumbs"
         },
        "outside": {
          "trunk": "jack"
        }
      }
    };

const contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    let result = "My " + myAdjective;
    result += " ";
    result += myNoun;
    result += " ";
    result += myVerb;
    result += " ";
    result += myAdverb;
    result += ".";
  
    let quickresult = "My " + myAdjective + " " + myNoun + " "
          + myVerb + " " + myAdverb + ".";
    // Your code above this line
   return result;
    // return "My " + myAdjective + " " + myNoun + " "
          + myVerb + " " + myAdverb + ".";
  //   return `My ${myAdjective} ${myNoun} ${myVerb} ${myAdverb}.`;
  
  }

function nextInLine(arr, item) {
      // Your code here
      arr.push(item);
      return arr.shift();  // Change this line
}

function loopTest() {
      for (var i = 0; i < 4; i++ ) {
            console.log('i',i);
      }
      console.log("i is alive !!",i);
      for (let j = 0; j < 4; j++) {
            console.log('j',j);
      }
      // console.log("j is dead baby!",j);
}

function main() {
      loopTest();
      console.log("Going to alert something");
      console.log("Checking out my global object", gObj.hat);
      console.log("My map", myStorage.car.inside["glove box"])

      // we use Ctrl-/ to comment and uncomment
      // alert("Hello RCS!");
      // console.log("I have alerted, lets finish this");
      // document.body.style.backgroundColor = "lightblue";
      var a = 20;
      var b = 30 - a;
      var c = b * a;

      var myList = [
            ["Chocolate Bar", 15, "Buy"],
            ["Chocolate Bar", 10, "Eat"],
            ["Bread", 15, "Make"],
            ["Chocolate Bar", 15, "Buy", "SomethingElse"],
            ["Milk", 2, "Drink"]
      
      
      ];
      console.log(a,b,c);

      //  one way of obtaining element by ID
      var myDiv = document.getElementById('output');
      //Javascripts lets me add strings with numbers, 
      // meaning JS converts number to sting then concatanetes two strings
      myDiv.innerText = "MyVariables:" + a + " : " + b + " : " + c;

      var myName = "Valdis";
      var myStr = "My name is " + myName + " and I am well!";

      myDiv.innerText = wordBlanks( "cat", "heavy", "chased", "mice");

      //  second way of obtaining element using query
      var resDiv = document.querySelector('#results')

      // quick and dirty way of modifying HTML inside the element
      // for more complicated HTML better to add elements discretely
      resDiv.innerHTML = JSON.stringify(myList);

      resDiv.innerHTML += "<hr>Today's Date:" + Date.now();
}

//This will get executed when we load our page
console.log("Going to run main function");
main();


