let move = 0
let winner = ""
let board = ["","","","","","","","",""]

function newGame() {
    location.reload()
}

function makeMove(event) {
    if (winner !== "") {
        return
    }

    if (event.target.innerText === "") {
        move++

        if (move % 2 === 0) {
            event.target.innerText = "o"
            board[event.target.id - 1] = "o"
        } else {
            event.target.innerText = "x"
            board[event.target.id - 1] = "x"
        }
    }
    
    score()
}

function score() {
    // X horizontal
    if (board[0] === "x" && board[1] === "x" && board[2] === "x") {
        winner = "x"
    } else if (board[3] === "x" && board[4] === "x" && board[5] === "x") {
        winner = "x"
    } else if (board[6] === "x" && board[7] === "x" && board[8] === "x") {
        winner = "x"
    }

    // X vertical
    if (board[0] === "x" && board[3] === "x" && board[6] === "x") {
        winner = "x"
    } else if (board[1] === "x" && board[4] === "x" && board[7] === "x") {
        winner = "x"
    } else if (board[2] === "x" && board[5] === "x" && board[8] === "x") {
        winner = "x"
    }

    // X diagonal
    if (board[0] === "x" && board[4] === "x" && board[8] === "x") {
        winner = "x"
    } else if (board[2] === "x" && board[4] === "x" && board[6] === "x") {
        winner = "x"
    }

    // O horizontal
    if (board[0] === "o" && board[1] === "o" && board[2] === "o") {
        winner = "o"
    } else if (board[3] === "o" && board[4] === "o" && board[5] === "o") {
        winner = "o"
    } else if (board[6] === "o" && board[7] === "o" && board[8] === "o") {
        winner = "o"
    }

    // O vertical
    if (board[0] === "o" && board[3] === "o" && board[6] === "o") {
        winner = "o"
    } else if (board[1] === "o" && board[4] === "o" && board[7] === "o") {
        winner = "o"
    } else if (board[2] === "o" && board[5] === "o" && board[8] === "o") {
        winner = "o"
    }

    // O diagonal
    if (board[0] === "o" && board[4] === "o" && board[8] === "o") {
        winner = "o"
    } else if (board[2] === "o" && board[4] === "o" && board[6] === "o") {
        winner = "o"
    }

    if (winner !== "") {
        const winner_element = document.getElementById("winner")
        const button = document.querySelector("button")

        button.classList.remove("hidden")

        if (winner === "x") {
            winner_element.innerText = "X is the winner!"
        } else {
            winner_element.innerText = "O is the winner!"
        }
    }

    if (winner === "" && move > 8) {
        const winner_element = document.getElementById("winner")
        const button = document.querySelector("button")

        button.classList.remove("hidden")
        winner_element.innerText = "Tie game!"
    }
}