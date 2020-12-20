namespace versuchx {

    let inputField: HTMLInputElement = (document.getElementById("todoInput")as HTMLInputElement); //inputfeld als Variable
    let todozahl: number = 0; //zählt todos in Liste


    //wenn enter gedrückt wird wird addtodo fkt ausgeführt
    inputField.addEventListener("keypress", function (e: KeyboardEvent): void {
        if (e.key == "Enter") {
            addtodo();
            console.log("enter gedrückt");
            ;
        }
    });


    //funktion erstell neues listenelement mit checkbox, inputvalue, trash
    function addtodo(): void {
        let myCheckbox: HTMLInputElement = document.createElement("input");
        myCheckbox.type = "checkbox";
        let myLabel: HTMLLabelElement = document.createElement("label");
        myLabel.innerHTML = inputField.value;
        let myTrash: HTMLElement = document.createElement("i");
        myTrash.className = "trash far fa-trash-alt";
        let list: HTMLElement = document.getElementById("todoList");
        let newElement: HTMLElement = document.createElement("li");
        list.appendChild(newElement);
        newElement.appendChild(myCheckbox);
        newElement.appendChild(myLabel);
        newElement.appendChild(myTrash);
        console.log("new added");
        todozahl++;

        //ändert todo anzahl in überschrift
        document.querySelector("h3").innerHTML = todozahl + " in total";

        //mit Klick auf trash wird element gelöscht
        myTrash.addEventListener("click", function(): void {
            newElement.remove();
            // index01--;
            // counter();
            todozahl--;
            todoZahl();
            console.log("todo minus");
            
            
        });

        function todoZahl(): void {
            document.querySelector("h3").innerHTML = todozahl + " in total";
        }


    }//addtodo ende
   

    
}//namespace ende