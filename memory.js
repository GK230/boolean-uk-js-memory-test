const randomNumbers = []
const guessedNumbers = []
const correctGuesses = []
let correct = 0;

for (let i = 0; i < 4; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}

for (number of randomNumbers) {
    alert(number)
}

setTimeout(function() {
    for (number of randomNumbers) {
        let guessedNumber = Number(prompt("What was the number?"))
        guessedNumbers.push(guessedNumber)
    }

    for (let i = 0; i < 4; i++) {
        if (randomNumbers[i] === guessedNumbers[i]) {
            correctGuesses.push(guessedNumbers[i])
        }
    }
    correct = correctGuesses.length;

    alert(`You got ${correct} right!`)
}, 3000);

