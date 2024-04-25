

let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function place(position) {
    const [row, col] = position.split(',');
    if (board[row][col] === '') {
        document.getElementById(`cell${row}${col}`).innerText = currentPlayer;
        board[row][col] = currentPlayer;
        if (checkWin(row, col)) {
            alert(`${currentPlayer} wins!`);
            reset();
        } else if (checkDraw()) {
            alert("It's a draw!");
            reset();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(row, col) {
    return (
        checkRow(row) ||
        checkColumn(col) ||
        checkDiagonal() ||
        checkAntiDiagonal()
    );
}

function checkRow(row) {
    return board[row].every(cell => cell === currentPlayer);
}

function checkColumn(col) {
    return board.every(row => row[col] === currentPlayer);
}

function checkDiagonal() {
    return board.every((row, index) => row[index] === currentPlayer);
}

function checkAntiDiagonal() {
    return board.every((row, index) => row[2 - index] === currentPlayer);
}

function checkDraw() {
    return board.every(row => row.every(cell => cell !== ''));
}

function reset() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
    })
};



document.addEventListener("DOMContentLoaded", function () {
    var homeButton = document.getElementById("home-button");
    homeButton.addEventListener("click", function () {
        window.location.href = "../index.html";
    });
});

