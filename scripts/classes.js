console.log("Started classes!");
// https://javascript.info/class


class User {
    counter = 0;

    constructor(newName) {
        this.name = newName;
    }

    sayHi() {
        console.log("Hello ", this.name, "for the ", this.counter, "time");
        this.counter++;
    }
}

//Classes are basically syntactic sugar over regular Javascript object
const obj = {
    counter : 0,
    constructor : function(newName) {
        this.name = newName;
    },
    sayHi : function() {
        console.log("Hello ", this.name, "for the ", this.counter, "time");
        this.counter++;
    }
}
obj.constructor("Voldemars");
obj.sayHi();
obj.sayHi();
obj.sayHi();


const usr = new User("Valdis");
usr.sayHi();
usr.sayHi();
usr.sayHi();

const usr2 = new User("Peteris");
usr2.sayHi();
usr2.sayHi();
usr2.sayHi();