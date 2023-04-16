let turn = 0;
let current_state = []
let starting_variable = "X"
const URL_LENGTH = 38;

for (let i = 0; i < 9; i++) {
    current_state[i] = "url(static/images/Transparent.png)";
}

function switchstarter() {
    let current_turn = document.querySelector('#starter').innerHTML;

    // Change the inner html for the starter button and switch the displayed current turn
    if (current_turn[15] === "X") {
        document.querySelector('#starter').innerHTML = "Starting With: O";
        document.querySelector('#X').style.backgroundColor = "#1C1C1C";
        document.querySelector('#O').style.backgroundColor = "#4F4F4F";

        starting_variable = "O";
        turn++;
    }
    else {
        document.querySelector('#starter').innerHTML = "Starting With: X";
        document.querySelector('#X').style.backgroundColor = "#4F4F4F";
        document.querySelector('#O').style.backgroundColor = "#1C1C1C";

        starting_variable = "X";
        turn--;
    }
}

function hovereffect() {
    // Add a hover effect on the buttons in the grid to show a preview of where the X or O will be placed
    if (turn % 2 === 0) {
        let button_hovered = document.getElementById(event.srcElement.id);
        button_hovered.style.backgroundImage = "url(static/images/Transparent_X.png)";
        button_hovered.style.opacity = "50%";
    }
    else {
        let button_hovered = document.getElementById(event.srcElement.id);
        button_hovered.style.backgroundImage = "url(static/images/Transparent_O.png)";
        button_hovered.style.opacity = "50%";
    }
}

function hovereffectclear() {
    // Remove the hover effect when the mouse leaves the button
    let button_unhovered = document.getElementById(event.srcElement.id);
    button_unhovered.style.backgroundImage = "url(static/images/Transparent.png)";
    button_unhovered.style.opacity = "100%";
}

function game() {
    // Disable the starter button
    document.querySelector('#starter').disabled = true;

    let button_clicked = document.getElementById(event.srcElement.id);

    // Switch the displayed turn
    if (turn % 2 === 0) {
        document.querySelector('#X').style.backgroundColor = "#1C1C1C";
        document.querySelector('#O').style.backgroundColor = "#4F4F4F";

        button_clicked.style.backgroundImage = "url(static/images/Transparent_X.png)";
    }
    else {
        document.querySelector('#X').style.backgroundColor = "#4F4F4F";
        document.querySelector('#O').style.backgroundColor = "#1C1C1C";

        button_clicked.style.backgroundImage = "url(static/images/Transparent_O.png)";
    }

    // Turn the button's opacity back to 100% because of the hover effect, then disable it
    button_clicked.style.opacity = "100%";
    button_clicked.disabled = true;

    let current_image = button_clicked.style.backgroundImage;

    let id = event.srcElement.id[3];
    current_state[id - 1] = document.querySelector("#btn" + id).style.backgroundImage;

    // Check if the current move made anyone win
    if (current_state[0] === current_state[1] && current_state[0] === current_state[2]) {
        if (current_state[0].length === URL_LENGTH && current_state[1].length === URL_LENGTH && current_state[2].length === URL_LENGTH) {
            document.getElementById("btn1").style.opacity = 0.5;
            document.getElementById("btn2").style.opacity = 0.5;
            document.getElementById("btn3").style.opacity = 0.5;
            endgame();
            return;
        }
    }

    if (current_state[3] === current_state[4] && current_state[3] === current_state[5]) {
        if (current_state[3].length === URL_LENGTH && current_state[4].length === URL_LENGTH && current_state[5].length === URL_LENGTH) {
            document.getElementById("btn4").style.opacity = 0.5;
            document.getElementById("btn5").style.opacity = 0.5;
            document.getElementById("btn6").style.opacity = 0.5;
            endgame();
            return;
        }
    }

    if (current_state[6] === current_state[7] && current_state[6] === current_state[8]) {
        if (current_state[6].length === URL_LENGTH && current_state[7].length === URL_LENGTH && current_state[8].length === URL_LENGTH) {
            document.getElementById("btn7").style.opacity = 0.5;
            document.getElementById("btn8").style.opacity = 0.5;
            document.getElementById("btn9").style.opacity = 0.5;
            endgame();
            return;
        }
    }

    if (current_state[0] === current_state[3] && current_state[0] === current_state[6]) {
        if (current_state[0].length === URL_LENGTH && current_state[3].length === URL_LENGTH && current_state[6].length === URL_LENGTH) {
            document.getElementById("btn1").style.opacity = 0.5;
            document.getElementById("btn4").style.opacity = 0.5;
            document.getElementById("btn7").style.opacity = 0.5;
            endgame();
            return;
        }
    }

    if (current_state[1] === current_state[4] && current_state[1] === current_state[7]) {
        if (current_state[1].length === URL_LENGTH && current_state[4].length === URL_LENGTH && current_state[7].length === URL_LENGTH) {
            document.getElementById("btn2").style.opacity = 0.5;
            document.getElementById("btn5").style.opacity = 0.5;
            document.getElementById("btn8").style.opacity = 0.5;
            endgame();
            return;
        }
    }

    if (current_state[2] === current_state[5] && current_state[2] === current_state[8]) {
        if (current_state[2].length === URL_LENGTH && current_state[5].length === URL_LENGTH && current_state[8].length === URL_LENGTH) {
            document.getElementById("btn3").style.opacity = 0.5;
            document.getElementById("btn6").style.opacity = 0.5;
            document.getElementById("btn9").style.opacity = 0.5;
            endgame();
            return;
        }
    }

    if (current_state[0] === current_state[4] && current_state[0] === current_state[8]) {
        if (current_state[0].length === URL_LENGTH && current_state[4].length === URL_LENGTH && current_state[8].length === URL_LENGTH) {
            document.getElementById("btn1").style.opacity = 0.5;
            document.getElementById("btn5").style.opacity = 0.5;
            document.getElementById("btn9").style.opacity = 0.5;
            endgame();
            return;
        }
    }

    if (current_state[2] === current_state[4] && current_state[2] === current_state[6]) {
        if (current_state[2].length === URL_LENGTH && current_state[4].length === URL_LENGTH && current_state[6].length === URL_LENGTH) {
            document.getElementById("btn3").style.opacity = 0.5;
            document.getElementById("btn5").style.opacity = 0.5;
            document.getElementById("btn7").style.opacity = 0.5;
            endgame();
            return;
        }
    }

    turn++;

    // Tie the game at 9 turns if starting with X, and 10 turns if starting at O
    if (starting_variable === "X") {
        if (turn >= 9) {
            document.querySelector("#Tie").hidden = false;
        }
    }
    else {
        if (turn >= 10) {
            document.querySelector("#Tie").hidden = false;
        }
    }
}

function endgame() {
    // Display the winner and increase the win count by one
    if (turn % 2 === 0) {
        document.querySelector('#X-winner').hidden = false;
        let win_count = document.querySelector('#X-wins').innerHTML;
        document.querySelector('#X-wins').innerHTML = 1 + + win_count;
    }
    else {
        document.querySelector('#O-winner').hidden = false;
        let win_count = document.querySelector('#O-wins').innerHTML;
        document.querySelector('#O-wins').innerHTML = 1 + + win_count;
    }

    // Disable all remaining buttons
    for (let i = 0; i < 9; i++) {
        id = (i + 1).toString();
        document.querySelector("#btn" + id).disabled = true;
    }
}

function reset() {
    // Sett all background images to transparent
    for (let i = 0; i < 9; i++) {
        id = "btn" + (i + 1).toString();
        document.querySelector("#" + id).disabled = false;
        document.getElementById(id).style.backgroundImage = "url(static/images/Transparent.png)";
        document.getElementById(id).style.opacity = 1;
        current_state[i] = "url(static/images/Transparent.png)";
    }

    document.querySelector('#X-winner').hidden = true;
    document.querySelector('#O-winner').hidden = true;
    document.querySelector('#Tie').hidden = true;

    // Re-enable the starter button
    document.querySelector('#starter').innerHTML = "Starting With: X";
    document.querySelector('#starter').disabled = false;
    starting_variable = "X"

    document.querySelector('#X').style.backgroundColor = "#4F4F4F";
    document.querySelector('#O').style.backgroundColor = "#1C1C1C";

    turn = 0;
}

function resetscore() {
    // Set both players' scores to 0
    document.querySelector('#X-wins').innerHTML = 0;
    document.querySelector('#O-wins').innerHTML = 0;
    return;
}