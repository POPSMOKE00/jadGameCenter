document.addEventListener("DOMContentLoaded", function () {
    var numberButtons = document.querySelectorAll(".number-button");
    var resultElement = document.getElementById("result");
    var restartButton = document.getElementById("restart-button");

    var randomNumber;

    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var guess = parseInt(button.textContent);
            checkGuess(guess);
        });
    });

    restartButton.addEventListener("click", function () {
        startNewGame();
    });

    startNewGame();

    function startNewGame() {
        randomNumber = generateRandomNumber();
        resultElement.textContent = "";
    }

    //kollar om gissningen krrt or inte
    function checkGuess(guess) {
        if (guess === randomNumber) {
            resultElement.textContent = "Grattis! Du gissade rätt!";
        } else if (guess < randomNumber) {
            resultElement.textContent = "Fel gissning. Gissa högre.";
        } else {
            resultElement.textContent = "Fel gissning. Gissa lägre.";
        }
    }

    function generateRandomNumber() {
        return Math.floor(Math.random() * 9) + 1;
    }
});


//bakgrund
window.onload = function () {
    var savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
};





