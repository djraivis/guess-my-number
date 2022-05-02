'use strict'

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score
}

// Enter on Key
var input = document.getElementById("myInput")
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("myBtn").click()
    }
})

document.querySelector('.check').addEventListener
    ('click', function () {
        let guess = Number((document.querySelector('.guess').value))

        console.log(guess, typeof guess)

        // When there is no input
        if (!guess) {
            displayMessage('⛔️ No Number')
        }

        // When player wins
        else if (guess === secretNumber) {
            displayMessage('🎉 Correct Number!')
            document.querySelector('.number').textContent = secretNumber
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem'
            if (score > highscore) {
                highscore = score
                document.querySelector('.highscore').textContent = highscore
            }
        }

        // When guess is wrong
        else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low')
                score--
                displayScore(score)
            }
            else {
                displayMessage('You lost the game 💥')
                displayScore(0)
            }
        }
    })

// Again
document.querySelector('.again').addEventListener(
    'click', function () {
        score = 20
        secretNumber = Math.trunc(Math.random() * 20) + 1
        displayMessage('Start guessing...')
        displayScore(score)
        document.querySelector('.number').textContent = '?'
        document.querySelector('.guess').value = ''
        document.querySelector('body').style.backgroundColor = ''
        document.querySelector('.number').style.width = '15rem'
    }
)
