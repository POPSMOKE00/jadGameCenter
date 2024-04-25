
function playGame(playerChoice) {
    const choices = ['sten', 'sax', 'påse'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultDisplay = document.getElementById('result');

    resultDisplay.innerHTML = 'Datorn valde: ' + computerChoice + '<br>';

    if (playerChoice === computerChoice) {
        resultDisplay.innerHTML += 'Det blev oavgjort!';
    } else if (
        (playerChoice === 'sten' && computerChoice === 'sax') ||
        (playerChoice === 'sax' && computerChoice === 'påse') ||
        (playerChoice === 'påse' && computerChoice === 'sten')
    ) {
        resultDisplay.innerHTML += 'Grattis, du vann!';
    } else {
        resultDisplay.innerHTML += 'Datorn vann!';
    }
}


// Funktion för att ändra bakgrundsfärgen
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;

    // Spara färgen i lokal lagring
    localStorage.setItem('backgroundColor', color);

    // Ladda om andra sidor för att uppdatera bakgrundsfärgen
    reloadOtherPages();
}

// Ladda om andra sidor för att uppdatera bakgrundsfärgen
function reloadOtherPages() {
    // Hämta alla sidor där bakgrundsfärgen ska ändras
    var otherPages = document.querySelectorAll('.other-page');

    // Loopa genom alla sidor och ladda om dem
    otherPages.forEach(function (page) {
        page.contentWindow.location.reload();
    });
}

// Kollar om det finns en sparad färg i lokal lagring och använd den om det gör det
document.addEventListener('DOMContentLoaded', function () {
    var savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});
