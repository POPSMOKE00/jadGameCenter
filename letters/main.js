document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const clearBtn = document.getElementById('clearBtn');
    const letterSelect = document.getElementById('letterSelect');
    const boxWidth = 350;
    const boxHeight = 350;
    const boxX = (canvas.width - boxWidth) / 2;
    const boxY = (canvas.height - boxHeight) / 2;
    let offsetX, offsetY;

    clearBtn.addEventListener('click', clearCanvas);

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBox();
    }

    function drawBox() {
        ctx.fillStyle = 'white';
        ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

        const selectedLetter = letterSelect.value;
        if (selectedLetter) {
            ctx.fillStyle = 'black';
            ctx.font = '120px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(selectedLetter, boxX + boxWidth / 2, boxY + boxHeight / 2);
        }

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
    }

    function startDrawing(event) {
        const rect = canvas.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
    }

    function draw(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x > boxX && x < boxX + boxWidth && y > boxY && y < boxY + boxHeight) {
            ctx.beginPath();
            ctx.moveTo(offsetX, offsetY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.stroke();
            offsetX = x;
            offsetY = y;
        } else {
            stopDrawing();
        }
    }

    function stopDrawing() {
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', stopDrawing);
        canvas.removeEventListener('mouseout', stopDrawing);
    }

    letterSelect.addEventListener('change', () => {
        clearCanvas();
    });

    drawBox();

    canvas.addEventListener('mousedown', startDrawing);
});

