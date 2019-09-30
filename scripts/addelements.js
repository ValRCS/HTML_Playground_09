console.log("Will add some elements on demand");

const addBtn = document.querySelector(".addelements");
addBtn.onclick = (event) => {
    console.log("You clicked on Add button");
    const inputField = document.querySelector("#el-count-1");
    console.log("Going to add this many elements: "+ inputField.value);

    //add elements
    
}

function addElement(parent, tag, props) {
    console.log("Adding a new element");
}