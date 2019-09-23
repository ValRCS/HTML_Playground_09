const CFG = {
    MAXPAR : 5,
    backgroundColor: "yellow",
    height: "50%"
}

function main() {
    // first we find the element that we will add new elements 
    const myApp = styleMainParent('#app-1', CFG);

    createChildren("#app-1");
    createPlainChild("body", "footer", "(C)2019");
    // setTimeout(deleteAllChildren, 5000, "#app-1");
    //if we want to delete immediately deleteAllChildren("#app-1");

    //adding Event Handlers
    const myDeleteBtn = document.querySelector("#delete-btn");
    myDeleteBtn.onclick = onDeleteButtonClick;

    document.querySelector("#reset-btn").onclick = onResetButtonClick;
    //arrow syntax example on adding handler underneath
    // event.target gets me the element responsible for firing the event
    document.querySelector('#random-btn').onclick = (event) => {
        console.log("Random!");
        event.target.innerText = "R"+Math.floor(Math.random()*100);
    };

    const myUpdateBtn = document.querySelector("#update-btn");
    //addEventListener for adding multple function callbacks
    myUpdateBtn.addEventListener('click', () => {console.log("Updating!");});
    myUpdateBtn.addEventListener('click', onUpdateButtonClick);
    myUpdateBtn.addEventListener('click', onResetButtonClick);

    document.onkeydown = (event) => {
        console.log("You pressed key: "+ event.code);
        console.log("Keycode is: "+event.key);
    }

    document.querySelector("#app-1").onmousemove = (event) => {
        console.log("Mouse X: "+ event.clientX);
        console.log("Mouse Y: "+ event.clientY);
    }
}

function styleMainParent(selector, mystyle) {
    // const myApp = document.getElementById('app-1');
    const myApp = document.querySelector(selector);
    //we can style the element
    myApp.style.backgroundColor = mystyle.backgroundColor;
    myApp.style.height = mystyle.height;
    return myApp;
}

function createChildren(selector) {
    const parent = document.querySelector(selector);
    //we can add new elements (children)
    //first we create a new element NOT attached to anything
    for (let i = 0; i < CFG.MAXPAR; i++) {
        const newP = document.createElement('p');
        newP.id = "p-"+i;
        newP.classList.add("my-text");
        newP.style.height = (i*2 + 20)+"px";
        // newP.style.fontSize = 10 + i*4;
        newP.style.backgroundColor = "hsl("+(i*360/CFG.MAXPAR)+", 30%, 40%)";
        newP.innerText = "Lorem Ipsum untt "+i;
        parent.appendChild(newP);
    }
}

function createPlainChild(selector, tag, text) {
    const parent = document.querySelector(selector);
    const newElement = document.createElement(tag);
    newElement.innerText = text;
    parent.appendChild(newElement);
}

function deleteAllChildren(selector) {
    const parent = document.querySelector(selector);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log("All children should be gone!");
}

//Event Handlers
function onAddButtonClick() {
    console.log("An Add button was clicked!");
    // alert('You Clicked me!');
}

function onDeleteButtonClick() {
    console.log("A Delete button was clicked!");
    // alert('You Clicked me!');
}

function onResetButtonClick() {
    console.log("Reset Button was clicked!");
}

function onUpdateButtonClick() {
    console.log("Handling Update..");
}


main();




