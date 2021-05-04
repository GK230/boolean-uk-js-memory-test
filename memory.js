function playMemoryTest(numberOfNumbers) {

    const randomNumbers = []
    const guessedNumbers = []
    const correctGuesses = []
    let correct = 0;

    for (let i = 0; i < numberOfNumbers; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }

    for (number of randomNumbers) {
        alert(number)
    }

    setTimeout(function() {
        for (let i = 0; i < numberOfNumbers + 1; i++) {
            if (i = 1) {
                let guessedNumber = Number(prompt("Enter the 1st number?"))
                guessedNumbers.push(guessedNumber)
            }

            if (i = 2) {
                let guessedNumber = Number(prompt("Enter the 2nd number?"))
                guessedNumbers.push(guessedNumber)
            } 

            if (i = 3) {
                let guessedNumber = Number(prompt("Enter the 3rd number?"))
                guessedNumbers.push(guessedNumber)
            } 

            if (i >= 4) {
                let guessedNumber = Number(prompt(`Enter the ${i}th number?`))
                guessedNumbers.push(guessedNumber)
            } 
        }
        
        for (let i = 0; i < numberOfNumbers; i++) {
            if (randomNumbers[i] === guessedNumbers[i]) {
                correctGuesses.push(guessedNumbers[i])
            }
        }
        correct = correctGuesses.length;

        alert(`You got ${correct} right!`)
    }, 15000);

}
