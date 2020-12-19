namespace brandneu {


let inputfield: HTMLInputElement = (document.getElementById("todoInput") as HTMLInputElement); //inputfeld als variable
let todosArray: string [] = []; //array für todos


//add Funktion, fügt inputfield zu array hinzu
function addTodo(): void {  
    todosArray.push(inputfield.value);
    console.log(todosArray);
}

//Mit enter wird Funktion aufgerufen und ToDo erstellt
inputfield.addEventListener("keypress", function (e: KeyboardEvent): void {  
    if (e.key == "Enter") {
        addTodo();
        document.querySelector("#todoList").innerHTML = "";
        for (let i: number = 0; i < todosArray.length; i++) {
            document.querySelector("#todoList").innerHTML += "<li id='listelement'><input type='checkbox'>" + todosArray[i] + "<i id='trash' class= 'far fa-trash-alt'></i>" ;           
        }
        console.log("todo added");
    }
    document.querySelector("h3").innerHTML = todosArray.length + " in total";
});


//LÖSCHEN MIT TRASHICON


const trashbutton: HTMLElement = document.getElementById("trash");

function deleteTask(): void {   
    todosArray.length = 0; //hab versucht ob Fkt überhaupt funktioniert
    // let remove: HTMLElement = this.parentNode; 
    // let parentNode: Node = remove.parentNode;
    // parentNode.removeChild(remove);


//aufruf für delete fkt

    trashbutton.addEventListener("click", function (): void {
    deleteTask();
    console.log("removed"); //in Konsole wird nichts ausgegeben wenn man Mülleimer anklickt
});



}
