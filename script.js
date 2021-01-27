var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("list");
var items = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    var deleteButton = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("delete")
    ul.appendChild(li);
    ul.appendChild(deleteButton);
    input.value = "";
    }

function addListAfterClick(){
    if( inputLength() > 0 ){
        createListElement();
        items = document.querySelectorAll("li");
    }

}

function addListAfterKeyPress(event){
    if( inputLength() > 0  && event.keyCode === 13){
        createListElement();
        items = document.querySelectorAll("li");
    }

}

function itemsCount(){
    return items.length;
}

//Changing the item's status
function changeStatus(event){
        var item = event.target;
        console.log(item.classList.value)
        if(item.classList.value == "" || item.classList.value == "done") {
            item.classList.toggle("done");
        } 
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress)

ul.addEventListener("click", changeStatus);



