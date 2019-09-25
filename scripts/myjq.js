//run main only when document is ready
$(document).ready(main);

//in a modern browser it would be something like this
//document.addEventListener('DOMContentLoaded', main, false);
//but jQuery also supports older browsers with onload etc handlers

//do not do this at home!! 
//you should not add your own variables to global window object! 
window.a = 10;
window.b = 20;
window.total = 100;
//so do not use functions which call this outside their bound scope

let user = {
    name: "Valdis",
    age: 30,
    //shorthand for adding function object
    //same as
    //sayHi : function() { //do stuff}
    sayHi() {
      // "this" is the "current object"
        //   alert(this.name);
        console.log("My Name is ", this.name);
        //Without this is not as safe as user could have been changed
        console.log("My Name is ", user.name);

        // arrow function do not have their own this, they use their parents this
        const arrfun = () => {
            console.log("My a is:", this.a);
        }
        arrfun();
    },

    a : 3333
  
  };
  
  user.sayHi(); // Should see valdis

const myobj = {
    a : 2,
    b : 3,
    total : undefined,
    //functions are first class citizens we can pass them and assign them
    add : adder,
    a2 : add2,

    a3 : function(n) {
        this.total += n;
    }

}

const o2 = {
    a : 3,
    b : 5,
    total : 20,
    oadd : adder
}

function adder(c) {
    this.total = this.a + this.b + c;
    console.log("Total is", this.total);
}

function add2(i,j) {
    return i+j;
}

function main() {



    console.log("Running Main!");
    $("h1").css("background-color", "green");
    $(".my-txt").css("background-color", "aqua");
    
    $("p").removeClass("my-txt");
    $("p").css("color", "brown");

    $("#b2").prop("disabled", true);
    $("#b1").prop("disabled", false);
    
    // $("p").remove();
    $("p").after("<p> more text </p>");
    $("p").after("<p> Even more text </p>");
    
    //add listeners to buttons
    $(".my-btn").click(function(event) {
        console.log("My ID is" + $(this).attr('id'));

        //we could use standard Javasript DOM api to get id
        console.log("Target is: "+ event.target.id);

        console.log("Testing this", this.id);
    });

    myobj.add(20);
    o2.oadd(50);
    adder(100);
}


main.a = 100;
main.b = 200;
main.total = 0;
main.add = adder;
main.add(23);

let a = [6,9];
a.b = 10;
console.log(a, a.b);
