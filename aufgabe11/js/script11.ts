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
    checked: false
}];


var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var opentasks: HTMLElement;
var closedtasks: HTMLElement;



declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
        
    //Artyom wird gestartet (wenn man Start drückt), hat timeout bis es hinzufügt, gestartet durch index wort
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();

    //wenn indexwort gesagt wird hört es zu -> wildcard ist das gesagte und wird Objekt hinzugefügt
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            todosObjekt.unshift({
                text: wildcard,
                checked: false
            });
            drawListToDOM();
            console.log("NEUE Aufgabe wird erstellt: " + wildcard);
            artyom.say(wildcard + "hinzugefügt");
            
        }
    });

    //Start des Zuhörens durch klick ausgelöst
    document.getElementById("start").addEventListener("click", function(): void {
        artyom.say("Willkommen");
        startContinuousArtyom();
    });

    //Stopbutton unnötig
    // document.getElementById("stop").addEventListener("click", function(): void {
    //     artyom.fatality(); //damit artyom aufhört
    //     // artyom.initialize(),
    //     artyom.say("danke");
    //     // UserDictation.stop();
    //     // todosObjekt.unshift(wildcard);
    // });
    

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    opentasks = document.querySelector("#open");
    closedtasks = document.querySelector("#closed");
    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});


//Elemente werden DOM hinzugefügt
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

//Zähler wird aktualisiert
function updateCounter(): void {

    let nropen: number = todosObjekt.filter(todosObjekt => todosObjekt.checked === false).length;
    let nrdone: number = todosObjekt.filter(todosObjekt => todosObjekt.checked === true).length;

    counterDOMElement.innerHTML = todosObjekt.length + " in total";
    opentasks.innerHTML = nropen + " open";
    closedtasks.innerHTML = nrdone + " done";
}




//Todo wird erstellt
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

//Checkbox
function toggleCheckState(index: number): void {
 todosObjekt[index].checked = !todosObjekt[index].checked;
 drawListToDOM();
}

//Löschen
function deleteTodo(index: number): void {
    todosObjekt.splice(index, 1);
    drawListToDOM();
}


}