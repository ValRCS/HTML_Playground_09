const CFG = {
    MAXPAR : 10
}

function main() {
    // first we find the element that we will add new elements 
    const myApp = document.getElementById('app-1');

    //we can style the element
    myApp.style.backgroundColor = "aqua";
    myApp.style.height = "70vh";

    //we can add new elements (children)
    //first we create a new element NOT attached to anything
    for (let i = 0; i < CFG.MAXPAR; i++) {
        const newP = document.createElement('p');
        newP.id = "p-"+i;
        newP.classList.add("my-text");
        newP.style.height = (i*2 + 20)+"px";
        // newP.style.fontSize = 10 + i*4;
        newP.style.backgroundColor = "hsl("+(i*360/MAXPAR)+", 30%, 40%)";
        newP.innerText = "Lorem Ipsum untt "+i;
        myApp.appendChild(newP);
    }
    setTimeout(deleteAllChildren, 5000, "#app-1");
    //if we want to delete immediately deleteAllChildren("#app-1");
}

function createChildren(selector) {
    const parent = document.querySelector(selector);

}

function deleteAllChildren(selector) {
    const parent = document.querySelector(selector);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log("All children should be gone!");
}


main();




