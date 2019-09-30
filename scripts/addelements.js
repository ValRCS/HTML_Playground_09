console.log("Will add some elements on demand");

const addBtn = document.querySelector(".addelements");
addBtn.onclick = (event) => {
    console.log("You clicked on Add button");
    const inputField = document.querySelector("#el-count-1");
    console.log("Going to add this many elements: "+ inputField.value);

    //add elements
    const mainCont = document.querySelector("#main-cont-1");
    for (let i = 0; i < inputField.value ; i++) {
        addElement(mainCont, "p", {
            content: "Lorem",
            id: "el-"+i,
            myClasses: ['red-txt', 'my-txt']      
     })
    }
}

const delBtn = document.querySelector(".del-elements");
//main difference between regular function and arrows is the scope of this
delBtn.onclick = function (event) {
    deleteAllElements(document.querySelector("#main-cont-1"));
}

function addElement(parent, tag, props) {
    console.log("Adding a new element");
    const newEl = document.createElement(tag);
    newEl.innerText = props.content;
    newEl.id = props.id;
    if (props.hasOwnProperty('myClasses')) {
        //new ES6 spread operator destructor for our array into parameters
        //so [1,"foo", "bar"] becomes 1, "foo", "bar"
        newEl.classList.add(...props.myClasses);
    }
    parent.appendChild(newEl);

}

function deleteAllElements(parent) {
    console.log("Deleting all children");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
}