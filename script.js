
/* this will track the count */
var count = 0;

/* add your event listener here */

let dugme = document.querySelector('button');
let h2 = document.querySelector('h2');

dugme.addEventListener('click', dodaj)

function dodaj() {
    h2.textContent = count = count + 1;
}

let smanji1 = document.querySelector('#smanji');

smanji1.addEventListener('click', smanji);

function smanji() {
    if (h2.textContent != 0)
        h2.textContent = count = count - 1;
}

let resetDugme = document.querySelector('#reset');
resetDugme.addEventListener('click', reset)


// na kraju reseta ponovo kreni pd 0
function reset() {
    if (h2.textContent > 0)
        h2.textContent = 0;
    count = 0;
}