let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;
let adicionar = document.querySelector("#adicionar")
let subtrair = document.querySelector("#subtrair")
let emoji = document.querySelector(".emoji")

function increment() {
    if (currentNumber < 10) {
        currentNumberWrapper.style.color = "black";
        currentNumberWrapper.style.fontWeight = "normal";
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        emoji.style.display = "none";
    }
    else {
        currentNumberWrapper.style.color = 'red';
        currentNumberWrapper.style.fontWeight = 'bold';
        emoji.style.display = "block";
        alert('Limite máximo alcançado.')
    }

}

function decrement() {
    if (currentNumber > 0 && currentNumber <= 10) {
        currentNumberWrapper.style.color = "black";
        currentNumberWrapper.style.fontWeight = "normal";
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        emoji.style.display = "none";
    } else {
        currentNumberWrapper.style.color = 'red';
        currentNumberWrapper.style.fontWeight = 'bold';
        emoji.style.display = "block";
        alert('Limite mínimo alcançado.');
    }

}