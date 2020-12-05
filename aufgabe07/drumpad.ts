
//7.1
//Array
const Sound: HTMLAudioElement [] = [];
Sound[0] = new Audio('assets/hihat.mp3');
Sound[1] = new Audio('assets/kick.mp3');
Sound[2] = new Audio('assets/snare.mp3');
Sound[3] = new Audio('assets/A.mp3');
Sound[4] = new Audio('assets/C.mp3');
Sound[5] = new Audio('assets/F.mp3');
Sound[6] = new Audio('assets/G.mp3');
Sound[7] = new Audio('assets/laugh-1.mp3');
Sound[8] = new Audio('assets/laugh-2.mp3');

//Funktion
function playSample (pad: number): void {
    Sound[pad].play();
}


//Aufruf
document.querySelector(".eins").addEventListener('click', function() {
    playSample(0)
})
document.querySelector(".zwei").addEventListener('click', function() {
    playSample(1)
})
document.querySelector(".drei").addEventListener('click', function() {
    playSample(2)
})
document.querySelector(".vier").addEventListener('click', function() {
    playSample(3)
})
document.querySelector(".fünf").addEventListener('click', function() {
    playSample(4)
})
document.querySelector(".sechs").addEventListener('click', function() {
    playSample(5)
})
document.querySelector(".sieben").addEventListener('click', function() {
    playSample(6)
})
document.querySelector(".acht").addEventListener('click', function() {
    playSample(7)
})
document.querySelector(".neun").addEventListener('click', function() {
    playSample(8)
})


//7.2 (erste Version)

// function playBeat (){
//     setInterval(function() {
//         playSample(0);
//         playSample(1);
//         playSample(2);
//         console.log('hello');
//         console.log('bye');
//     }, 500);
// }


// document.querySelector('.play').addEventListener('click', function () {
//     playBeat();
// });


//7.2 richtige Version
//Funktion
var sequence:string  [] = ['assets/hihat.mp3', 'assets/kick.mp3', 'assets/snare.mp3'];

var indexOfSequence: number = 0;

function playBeat() {
    setInterval(function () {
        var sound: HTMLAudioElement = new Audio (sequence[indexOfSequence]);
        sound.play();

        indexOfSequence = indexOfSequence + 1;
    }, 500);
}

//Aufruf
document.querySelector('.play').addEventListener('click', function () {
    playBeat ()
});