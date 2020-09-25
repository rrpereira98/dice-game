let roll = document.querySelector("#roll");
let dice1 = document.querySelector("#dice1");
let dice2 = document.querySelector("#dice2");
let h2 = document.querySelector("h2")
let result1 = 0;
let result2 = 0;

function rollDice() {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    return randomNum;
}

roll.addEventListener('click', () => {
    result1 = rollDice();
    result2 = rollDice();
    selectDice1();
    selectDice2();

    if (result1 === result2) {
        h2.textContent = 'Its a draw'
        h2.style.display = "block"
    } else if (result1 < result2) {
        h2.textContent = 'Player 2 Wins!'
        h2.style.display = "block"
    } else {
        h2.textContent = 'Player 1 Wins!'
        h2.style.display = "block"
    }

})






function selectDice1() {
    if (result1 === 1) {
        dice1.className = 'fas fa-dice-one'
    } else if (result1 === 2) {
        dice1.className = 'fas fa-dice-two'
    } else if (result1 === 3) {
        dice1.className = 'fas fa-dice-three'
    } else if (result1 === 4) {
        dice1.className = 'fas fa-dice-four'
    } else if (result1 === 5) {
        dice1.className = 'fas fa-dice-five'
    } else {
        dice1.className = 'fas fa-dice-six'
    }
}

function selectDice2() {
    if (result2 === 1) {
        dice2.className = 'fas fa-dice-one'
    } else if (result2 === 2) {
        dice2.className = 'fas fa-dice-two'
    } else if (result2 === 3) {
        dice2.className = 'fas fa-dice-three'
    } else if (result2 === 4) {
        dice2.className = 'fas fa-dice-four'
    } else if (result2 === 5) {
        dice2.className = 'fas fa-dice-five'
    } else {
        dice2.className = 'fas fa-dice-six'
    }
}
