namespace aufgabe11 {


//Interface
interface todosInter {
    text: string;
    checked: boolean;
}

//Objekt Array
var todosObjekt: todosInter [] = [{
    text: "Film schauen",
    checked: true
}, {
    text: "Backen",
    checked: true
}, {
    text: "Kochen",
    checked: true
}];


var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var opentasks: HTMLElement;
var closedtasks: HTMLElement;


window.addEventListener("load", function(): void {


    // import Artyom from "js/libs/artyom.window.min.js"
    // let jarvis = new Artyom();
    // jarvis.say("Hello !");
    // Artyom.initialize({
    //     lang: "en-US",
    //     continuous: true,
    //     debug: false, // Show what recognizes in the Console
    //     listen: true, // Start listening after this
    //     speed: 0.9, // Talk a little bit slow
    //     //mode:"normal", // This parameter is not required as it will be normal by default
    //     word_init_comma: "jarvis"
    //   });




    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    opentasks = document.querySelector("#open");
    closedtasks = document.querySelector("#closed");

    
    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});





function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todosObjekt.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + todosObjekt[index].checked + "'><i class='fas fa-check'></i></span>"
                            + todosObjekt[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
            updateCounter();
        });

        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}


function updateCounter(): void {

    let nropen: number = todosObjekt.filter(todosObjekt => todosObjekt.checked === false).length;
    let nrdone: number = todosObjekt.filter(todosObjekt => todosObjekt.checked === true).length;

    counterDOMElement.innerHTML = todosObjekt.length + " in total";
    opentasks.innerHTML = nropen + " open";
    console.log(nrdone);
    closedtasks.innerHTML = nrdone + " done";
}


function addTodo(): void {
    
    if (inputDOMElement.value != "") {
        
        todosObjekt.unshift({
            text: inputDOMElement.value,
            checked: false
        });
 
        inputDOMElement.value = "";
    }
    drawListToDOM();

}


function toggleCheckState(index: number): void {
 todosObjekt[index].checked = !todosObjekt[index].checked;
 drawListToDOM();
}

function deleteTodo(index: number): void {
    todosObjekt.splice(index, 1);
    drawListToDOM();
}





}