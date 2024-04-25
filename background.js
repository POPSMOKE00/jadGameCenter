// När barent klickar på en färg
function changeBackgroundColor(colorCode) {
    // Spara färgkoden i local storage
    localStorage.setItem('selectedColor', colorCode);
    // Ställ in bakgrundsfärgen
    document.body.style.backgroundColor = colorCode;
}

// När sidan laddas
window.onload = function () {
    // Hämta färgkoden från local storage
    const selectedColor = localStorage.getItem('selectedColor');
    if (selectedColor) {
        // Ställ in bakgrundsfärgen
        document.body.style.backgroundColor = selectedColor;
    }
}

window.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('background-music');
    audio.play();
});
document.addEventListener('DOMContentLoaded', function () {
    // Kontrollera om introduktionen redan har visats genom att kolla i lokal lagring
    var introShown = localStorage.getItem('introShown');

    // Om introduktionen inte har visats än
    if (!introShown) {
        // Visa introduktionen
        setTimeout(function () {
            var introContainer = document.querySelector('.intro-container');
            introContainer.style.opacity = '0'; // Minska opaciteten för att göra den osynlig
            setTimeout(function () {
                introContainer.style.display = 'none'; // Dölj elementet helt efter ytterligare en kort fördröjning
            }, 500); // Ytterligare fördröjning på 500 ms för att ge tid för fade-out-animationen att slutföras

            // Spara i lokal lagring att introduktionen har visats
            localStorage.setItem('introShown', true);
        }, 2500); // Tid innan intro försvinner helt
    } else {
        // Om introduktionen redan har visats, göm intro-container direkt
        var introContainer = document.querySelector('.intro-container');
        introContainer.style.display = 'none';
    }
});
window.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('background-music');
    audio.play();
});
