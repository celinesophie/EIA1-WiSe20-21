var versuchx;
(function (versuchx) {
    var inputField = document.getElementById("todoInput"); //inputfeld als Variable
    var todozahl = 0; //zählt todos in Liste
    //wenn enter gedrückt wird wird addtodo fkt ausgeführt
    inputField.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            addtodo();
            console.log("enter gedrückt");
            ;
        }
    });
    //funktion erstell neues listenelement mit checkbox, inputvalue, trash
    function addtodo() {
        var myCheckbox = document.createElement("input");
        myCheckbox.type = "checkbox";
        var myLabel = document.createElement("label");
        myLabel.innerHTML = inputField.value;
        var myTrash = document.createElement("i");
        myTrash.className = "trash far fa-trash-alt";
        var list = document.getElementById("todoList");
        var newElement = document.createElement("li");
        list.appendChild(newElement);
        newElement.appendChild(myCheckbox);
        newElement.appendChild(myLabel);
        newElement.appendChild(myTrash);
        console.log("new added");
        todozahl++;
        //ändert todo anzahl in überschrift
        document.querySelector("h3").innerHTML = todozahl + " in total";
        //mit Klick auf trash wird element gelöscht
        myTrash.addEventListener("click", function () {
            newElement.remove();
            // index01--;
            // counter();
            todozahl--;
            todoZahl();
            console.log("todo minus");
        });
        function todoZahl() {
            document.querySelector("h3").innerHTML = todozahl + " in total";
        }
    } //addtodo ende
})(versuchx || (versuchx = {})); //namespace ende
//# sourceMappingURL=final09.js.map