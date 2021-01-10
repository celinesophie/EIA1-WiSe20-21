var aufgabe11;
(function (aufgabe11) {
    //Objekt Array
    var todosObjekt = [{
            text: "Film schauen",
            checked: true
        }, {
            text: "Backen",
            checked: true
        }, {
            text: "Kochen",
            checked: false
        }];
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    var opentasks;
    var closedtasks;
    window.addEventListener("load", function () {
        var artyom = new Artyom();
        //Artyom wird gestartet (wenn man Start drückt), hat timeout bis es hinzufügt, gestartet durch index wort
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        startContinuousArtyom();
        //wenn indexwort gesagt wird hört es zu -> wildcard ist das gesagte und wird Objekt hinzugefügt
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
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
        document.getElementById("start").addEventListener("click", function () {
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
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + todosObjekt[index].checked + "'><i class='fas fa-check'></i></span>"
                + todosObjekt[index].text +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index);
                updateCounter();
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);
        };
        for (var index = 0; index < todosObjekt.length; index++) {
            _loop_1(index);
        }
        updateCounter();
    }
    //Zähler wird aktualisiert
    function updateCounter() {
        var nropen = todosObjekt.filter(function (todosObjekt) { return todosObjekt.checked === false; }).length;
        var nrdone = todosObjekt.filter(function (todosObjekt) { return todosObjekt.checked === true; }).length;
        counterDOMElement.innerHTML = todosObjekt.length + " in total";
        opentasks.innerHTML = nropen + " open";
        closedtasks.innerHTML = nrdone + " done";
    }
    //Todo wird erstellt
    function addTodo() {
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
    function toggleCheckState(index) {
        todosObjekt[index].checked = !todosObjekt[index].checked;
        drawListToDOM();
    }
    //Löschen
    function deleteTodo(index) {
        todosObjekt.splice(index, 1);
        drawListToDOM();
    }
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=script11.js.map