var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(addDeleteButton());
    list.appendChild(li);
    input.value = "";
}

function addListAfterClick(){
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListKeyPress(event){
    if (inputLength()> 0 && event.keyCode === 13) {
        createListElement();
    }
}

function turnListElement(event){
    if (event.path[0].tagName === "LI") {
        var li = event.path[0];
        li.classList.toggle("done");
    } else if (event.path[0].tagName === "BUTTON") {
        deleteListElement(event.path[1]);
    }
}

function addDeleteButton(){
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    return deleteButton;
}

function deleteListElement(item){
    list.removeChild(item);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListKeyPress);
list.addEventListener("click", turnListElement);
