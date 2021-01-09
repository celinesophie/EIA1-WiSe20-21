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
            checked: true
        }];
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    var opentasks;
    var closedtasks;
    window.addEventListener("load", function () {
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
    function updateCounter() {
        var nropen = todosObjekt.filter(function (todosObjekt) { return todosObjekt.checked === false; }).length;
        var nrdone = todosObjekt.filter(function (todosObjekt) { return todosObjekt.checked === true; }).length;
        counterDOMElement.innerHTML = todosObjekt.length + " in total";
        opentasks.innerHTML = nropen + " open";
        console.log(nrdone);
        closedtasks.innerHTML = nrdone + " done";
    }
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
    function toggleCheckState(index) {
        todosObjekt[index].checked = !todosObjekt[index].checked;
        drawListToDOM();
    }
    function deleteTodo(index) {
        todosObjekt.splice(index, 1);
        drawListToDOM();
    }
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=script11.js.map