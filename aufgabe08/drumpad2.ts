
namespace anders {

//7.1
//Array für einzelne Pads
let sound: HTMLAudioElement [] = [];
sound[0] = new Audio("assets/hihat.mp3");
sound[1] = new Audio("assets/kick.mp3");
sound[2] = new Audio("assets/snare.mp3");
sound[3] = new Audio("assets/A.mp3");
sound[4] = new Audio("assets/C.mp3");
sound[5] = new Audio("assets/F.mp3");
sound[6] = new Audio("assets/G.mp3");
sound[7] = new Audio("assets/laugh-1.mp3");
sound[8] = new Audio("assets/laugh-2.mp3");

//Funktion
function playSample (pad: number): void {
    sound[pad].play();
}


//Aufruf der Pads
document.querySelector(".eins").addEventListener("click", function(): void {
    playSample(0);
    recordBeat(0);
});
document.querySelector(".zwei").addEventListener("click", function(): void {
    playSample(1);
    recordBeat(1);
});
document.querySelector(".drei").addEventListener("click", function(): void {
    playSample(2);
    recordBeat(2);
});
document.querySelector(".vier").addEventListener("click", function(): void {
    playSample(3);
    recordBeat(3);
});
document.querySelector(".fünf").addEventListener("click", function(): void {
    playSample(4);
    recordBeat(4);
});
document.querySelector(".sechs").addEventListener("click", function(): void {
    playSample(5);
    recordBeat(5);
});
document.querySelector(".sieben").addEventListener("click", function(): void {
    playSample(6);
    recordBeat(6);
});
document.querySelector(".acht").addEventListener("click", function(): void {
    playSample(7);
    recordBeat(7);
});
document.querySelector(".neun").addEventListener("click", function(): void {
    playSample(8);
    recordBeat(8);
});



//Aufgabe08

let booleanPlay: boolean = false;

//PLAY und STOP button bekommen Aufgabe und SWITCHEN
document.getElementById("play").addEventListener("click", function (): void {
    document.getElementById("play").classList.add("isHidden");
    document.getElementById("stop").classList.remove("isHidden");
    booleanPlay = true;
    schleife();
});


let myInterval: number = 0;
//Stop button geht nicht
document.getElementById("stop").addEventListener("click", function (): void {
    document.getElementById("stop").classList.add("isHidden");
    document.getElementById("play").classList.remove("isHidden");
    clearInterval(myInterval);
});

//SCHLEIFE

let i: number = 0;
let booleanRecord: boolean = false;


let leeresArray: number [] = [];

function schleife (): void {   
        if (booleanPlay == true) {
            myInterval = setInterval (function (): void {
                if (i < leeresArray.length) {
                    playSample(leeresArray[i]);
                    i++;
                }  else {
                    i = 0;
                }
    },                                500);
} else {
    clearInterval(myInterval);
}
}


//RECORD-button

//record Funktion, Sounds in Array gepusht
function recordBeat (i: number): void {
    if (booleanRecord == true) {
        leeresArray.push(i);
    }
}

//click record-button wird rot & booleanRecord true
document.getElementById("record").addEventListener("click", function (): void {
    if (document.getElementById("record").classList.contains("active")) {
        document.getElementById("record").classList.remove("active");
        booleanRecord = false;
    } else {
        document.getElementById("record").classList.add("active");
        booleanRecord = true;
    }
});


// Trash button - array leeren

document.getElementById("trash").addEventListener("click", function(): void {
    leeresArray.length = 0;
});


}