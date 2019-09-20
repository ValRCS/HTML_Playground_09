
function main() {
    // first we find the element that we will add new elements 
    const myApp = document.getElementById('app-1');
    const MAXPAR = 10;

    //we can style the element
    myApp.style.backgroundColor = "aqua";
    myApp.style.height = "70vh";

    //we can add new elements (children)
    //first we create a new element NOT attached to anything
    for (let i = 0; i < MAXPAR; i++) {
        const newP = document.createElement('p');
        newP.id = "p-"+i;
        newP.classList.add("my-text");
        newP.style.height = (i*10 + 20)+"px";
        newP.style.backgroundColor = "hsl("+(i*360/MAXPAR)+", 30%, 40%)";
        newP.innerText = "Lorem Ipsum untt "+i;
        myApp.appendChild(newP);
    }
}

main();




