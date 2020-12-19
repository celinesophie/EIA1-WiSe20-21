var brandneu;
(function (brandneu) {
    var inputfield = document.getElementById("todoInput"); //inputfeld als variable
    var todosArray = []; //array für todos
    //add Funktion, fügt inputfield zu array hinzu
    function addTodo() {
        todosArray.push(inputfield.value);
        console.log(todosArray);
    }
    //Mit enter wird Funktion aufgerufen und ToDo erstellt
    inputfield.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            addTodo();
            document.querySelector("#todoList").innerHTML = "";
            for (var i = 0; i < todosArray.length; i++) {
                document.querySelector("#todoList").innerHTML += "<li id='listelement'><input type='checkbox'>" + todosArray[i] + "<i id='trash' class= 'far fa-trash-alt'></i>";
            }
            console.log("todo added");
        }
        document.querySelector("h3").innerHTML = todosArray.length + " in total";
    });
    //LÖSCHEN MIT TRASHICON
    var trashbutton = document.getElementById("trash");
    function deleteTask() {
        todosArray.length = 0; //hab versucht ob Fkt überhaupt funktioniert
        // let remove: HTMLElement = this.parentNode; 
        // let parentNode: Node = remove.parentNode;
        // parentNode.removeChild(remove);
        //aufruf für delete fkt
        trashbutton.addEventListener("click", function () {
            deleteTask();
            console.log("removed"); //in Konsole wird nichts ausgegeben wenn man Mülleimer anklickt
        });
    }
})(brandneu || (brandneu = {}));
//# sourceMappingURL=todo.js.map