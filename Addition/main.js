document.addEventListener("DOMContentLoaded", function () {
    var operand1Element = document.getElementById("operand1");
    var operand2Element = document.getElementById("operand2");
    var answerInput = document.getElementById("answer-input");
    var checkButton = document.getElementById("check-button");
    var resultElement = document.getElementById("result");
    var nextButton = document.getElementById("next-button");

    var currentLevel = 1;

    initializeGame();

    checkButton.addEventListener("click", function () {
        var answer = parseInt(answerInput.value);
        var correctAnswer = parseInt(operand1Element.dataset.value) + parseInt(operand2Element.dataset.value);

        if (answer === correctAnswer) {
            resultElement.textContent = "Korrekt!";
            nextButton.style.display = "inline-block";
        } else {
            resultElement.textContent = "Fel svar. Försök igen.";
        }
    });

    nextButton.addEventListener("click", function () {
        currentLevel++;
        if (currentLevel > 10) {
            resultElement.textContent = "Grattis! Du klarade alla nivåer.";
            nextButton.style.display = "none";
        } else {
            initializeGame();
            resultElement.textContent = "";
            nextButton.style.display = "none";
        }
    });

    function initializeGame() {
        operand1Element.dataset.value = generateOperand();
        operand2Element.dataset.value = generateOperand();
        operand1Element.innerHTML = getImagesHTML(operand1Element.dataset.value);
        operand2Element.innerHTML = getImagesHTML(operand2Element.dataset.value);
        answerInput.value = "";
    }

    function generateOperand() {
        //slumpmässigt tal mellan 1 och 10 
        return Math.floor(Math.random() * 5) + 1;
    }

    function getImagesHTML(number) {

        var imagesHTML = "";
        for (var i = 0; i < number; i++) {
            imagesHTML += "<img src='" + getImageURL() + "' alt='Bil'>";
        }
        return imagesHTML;
    }

    function getImageURL() {
        var imageUrls = [
            "https://t1.pixers.pics/img-d5043af1/fototapeter-rod-bil-cartoon.png?H4sIAAAAAAAAA41P7W7DIAx8nURKYxOgAR6gf_sIEQWnzZoPBHTd9vQjmvprmjT5h-2z704HjzXZkcDRminCMnk_E4zTXLZkIqXpiypsehS1KehcIWJttneKLm6h4qw5KNVoxpped7V52sJbbLxXt5xDMgCJt2H6KGKluQRuSdAh6wGPILUUVnSjcl73Q7aBsj3cn9ZHm9uwXhvcqzY2hPlziFRMEw12Djf7f3mOvSR5ecn_dqlfKQViI_Z041Yi5Gq_wR8-PzOUdzidQQpgHJQEzXdoOJ2lYFxJzQc--ktPwirRedJcE3bOK3RSHo_Ocd2-hes3Rt5-0IQBAAA=",
            "https://thumb.mp-farm.com/0014751/preview.jpg",
            "https://media.istockphoto.com/id/493929304/sv/vektor/motor-boat-cartoon-character.jpg?s=612x612&w=is&k=20&c=sJpc_nEMXN8az0R2wNAPgEMSzDGp29iSVBsP0BQohWo="
        ];

        return imageUrls[Math.floor(Math.random() * imageUrls.length)];
    }
    function getImagesHTML(number) {
        var imagesHTML = "";
        for (var i = 0; i < number; i++) {
            imagesHTML += "<img src='" + getImageURL() + "' alt='Bil' class='operand-image'>";
        }
        return imagesHTML;
    }


});



