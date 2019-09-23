const CFG = {
    MAXPAR : 5,
    backgroundColor: "yellow",
    height: "50%"
}

function main() {
    // first we find the element that we will add new elements 
    const myApp = styleMainParent('#app-1', CFG);

    createChildren("#app-1");
    createPlainChild("body", "footer");
    // setTimeout(deleteAllChildren, 5000, "#app-1");
    //if we want to delete immediately deleteAllChildren("#app-1");
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

function createPlainChild(selector, tag) {
    const parent = document.querySelector(selector);
    const newElement = document.createElement(tag);
    parent.appendChild(newElement);
}

function deleteAllChildren(selector) {
    const parent = document.querySelector(selector);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log("All children should be gone!");
}


main();




