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

    document.querySelector("#app-1").onclick = (event) => {
        console.log("You clicked my app div"+event.target.id);
    }

    document.querySelector("#p-2").onclick = (event) => {
        console.log("You clicked paragraph "+event.target.id);
    }

    //example on how to stop bubbling up!
    document.querySelector("#p-3").onclick = (event) => {
        console.log("You clicked paragraph "+event.target.id);
        console.log("Stoping bubbling Propagation toward parent");
        event.stopPropagation();
    }

    const myUpdateBtn = document.querySelector("#update-btn");
    //addEventListener for adding multple function callbacks
    myUpdateBtn.addEventListener('click', () => {console.log("Updating!");});
    myUpdateBtn.addEventListener('click', onUpdateButtonClick);
    myUpdateBtn.addEventListener('click', onResetButtonClick);

    // document.onkeydown = (event) => {
    //     console.log("You pressed key: "+ event.code);
    //     console.log("Keycode is: "+event.key);
    // }

    //how to handle mouse move events
    // document.querySelector("#app-1").onmousemove = (event) => {
    //     console.log("Mouse X: "+ event.clientX);
    //     console.log("Mouse Y: "+ event.clientY);
    // }

    const mySubmitBtn = document.querySelector(".btn-submit");
    mySubmitBtn.onclick = (event) => {
        // const inp1 = document.querySelector(".inp1");
        // const val1 = parseFloat(inp1.value);
        // console.log("Value is:"+val1);
        // const inp2 = document.querySelector(".inp2");
        // const val2 = parseFloat(inp2.value);
        // console.log("Value is:"+val2);
        // const inp3 = document.querySelector(".inp3");
        // const val3 = val1 + val2;
        // console.log("Val3 should be:"+ val3);
        // inp3.value = val1 + val2;

        //above in one in one line below

        // document.querySelector(".inp3").value = parseFloat(document.querySelector(".inp1").value) +
        //         parseFloat(document.querySelector(".inp2").value); 

        //same one line as above except we use our own helper function
        vs(".inp3").value = parseFloat(vs(".inp1").value) +parseFloat(vs(".inp2").value);

    }
}

//helper function (think mega simple $ in jQuery)
function vs(selector) {
    return document.querySelector(selector);
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

function createPlainChild(selector, tag, text, className = "my-text") {
    const parent = document.querySelector(selector);
    const newElement = document.createElement(tag);
    newElement.innerText = text;
    newElement.classList.add(className);
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
function onAddButtonClick(event) {
    console.log("An Add button was clicked!");
    console.log("Target id is " + event.target.id);
    createPlainChild("#app-1", "p", "Lorem");
    // alert('You Clicked me!');
}

function onDeleteButtonClick() {
    console.log("A Delete button was clicked!");
    const myel = document.querySelector("#app-1");
    myel.removeChild(myel.lastChild);
    // alert('You Clicked me!');
}

function onResetButtonClick() {
    console.log("Reset Button was clicked!");
    deleteAllChildren("#app-1");
    createChildren("#app-1");
}

function onUpdateButtonClick() {
    console.log("Handling Update..");
}


main();




