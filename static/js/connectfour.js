let turn = 0;

const ROW_NUMBER = 6;
const COLUMN_NUMBER = 9;

let current_state = [];

for (let i = 0; i < ROW_NUMBER; i++) {
    current_state[i] = [];

    for (let j = 0; j < COLUMN_NUMBER; j++) {
        current_state[i][j] = "#1C1C1C";
    }
}

function hovereffect() {
    let button = document.getElementById(simulategravity(event.srcElement.id));

    if (turn % 2 === 0) {
        button.style.backgroundColor = "#FF0000";
    }
    else {
        button.style.backgroundColor = "#FFFF00";
    }

    button.style.opacity = "50%";
}

function hovereffectclear() {
    let buttons = document.getElementsByClassName('game-button');

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].disabled === false) {
            buttons[i].style.backgroundColor = "#1C1C1C";
            buttons[i].style.opacity = "100%";
        }
    }
}

function simulategame() {
    let button_id = simulategravity(event.srcElement.id);
    let button = document.getElementById(button_id);

    if (turn % 2 === 0) {
        button.style.backgroundColor = "#FF0000";
        current_state[parseInt(button_id[3]) - 1][parseInt(button_id[4]) - 1] = "#FF0000";
    }
    else {
        button.style.backgroundColor = "#FFFF00";
        current_state[parseInt(button_id[3]) - 1][parseInt(button_id[4]) - 1] = "#FFFF00";
    }

    button.style.opacity = "100%";
    button.disabled = true;

    checkendgame(button_id);

    turn++;
}

function checkendgame(id) {
    let current_row_number = parseInt(id[3]);
    let current_column_number = parseInt(id[4]);

    let consecutive_count = 0;
    let max_consecutive_count = 0;

    // Red
    if (turn % 2 === 0) {
        // Check Rows
        for (let i = 0; i < COLUMN_NUMBER; i++) {
            if (current_state[current_row_number - 1][i] === "#FF0000") {
                consecutive_count++;
                if (consecutive_count > max_consecutive_count) {
                    max_consecutive_count = consecutive_count;
                }
            }
            else {
                consecutive_count = 0;
            }
        }

        consecutive_count = 0;

        // Check Columns
        for (let i = 0; i < ROW_NUMBER; i++) {
            if (current_state[i][current_column_number - 1] === "#FF0000") {
                consecutive_count++;
                if (consecutive_count > max_consecutive_count) {
                    max_consecutive_count = consecutive_count;
                }
            }
            else {
                consecutive_count = 0;
            }
        }

        consecutive_count = 0;

        // Check diagnols

        // Get bottom left button to check the bottom left to top right diagnol
        diagnol_row = current_row_number;
        diagnol_column = current_column_number;
        while (diagnol_row < 6 && diagnol_column > 1) {
            diagnol_row++;
            diagnol_column--;
        }

        // Check the bottom left to top right diagnol
        while (diagnol_row >= 1 && diagnol_column <= 9) {
            if (current_state[diagnol_row - 1][diagnol_column - 1] === "#FF0000") {
                consecutive_count++;
                if (consecutive_count > max_consecutive_count) {
                    max_consecutive_count = consecutive_count;
                }
            }
            else {
                consecutive_count = 0;
            }

            diagnol_row--;
            diagnol_column++;
        }

        consecutive_count = 0;

        // Get bottom right button to check the bottom right to top left diagnol
        diagnol_row = current_row_number;
        diagnol_column = current_column_number;
        while (diagnol_row < 6 && diagnol_column < 9) {
            diagnol_row++;
            diagnol_column++;
        }

        // Check the bottom right to top left diagnol
        while (diagnol_row >= 1 && diagnol_column >= 1) {
            if (current_state[diagnol_row - 1][diagnol_column - 1] === "#FF0000") {
                consecutive_count++;
                if (consecutive_count > max_consecutive_count) {
                    max_consecutive_count = consecutive_count;
                }
            }
            else {
                consecutive_count = 0;
            }

            diagnol_row--;
            diagnol_column--;
        }

        consecutive_count = 0;
    }
    // Yellow
    else {
        // Check Rows
        for (let i = 0; i < COLUMN_NUMBER; i++) {
            if (current_state[current_row_number - 1][i] === "#FFFF00") {
                consecutive_count++;
                if (consecutive_count > max_consecutive_count) {
                    max_consecutive_count = consecutive_count;
                }
            }
            else {
                consecutive_count = 0;
            }
        }

        consecutive_count = 0;

        // Check Columns
        for (let i = 0; i < ROW_NUMBER; i++) {
            if (current_state[i][current_column_number - 1] === "#FFFF00") {
                consecutive_count++;
                if (consecutive_count > max_consecutive_count) {
                    max_consecutive_count = consecutive_count;
                }
            }
            else {
                consecutive_count = 0;
            }
        }

        consecutive_count = 0;

        // Check diagnols

        // Get bottom left button to check the bottom left to top right diagnol
        diagnol_row = current_row_number;
        diagnol_column = current_column_number;
        while (diagnol_row < 6 && diagnol_column > 1) {
            diagnol_row++;
            diagnol_column--;
        }

        // Check the bottom left to top right diagnol
        while (diagnol_row >= 1 && diagnol_column <= 9) {
            if (current_state[diagnol_row - 1][diagnol_column - 1] === "#FFFF00") {
                consecutive_count++;
                if (consecutive_count > max_consecutive_count) {
                    max_consecutive_count = consecutive_count;
                }
            }
            else {
                consecutive_count = 0;
            }

            diagnol_row--;
            diagnol_column++;
        }

        consecutive_count = 0;

        // Get bottom right button to check the bottom right to top left diagnol
        diagnol_row = current_row_number;
        diagnol_column = current_column_number;
        while (diagnol_row < 6 && diagnol_column < 9) {
            diagnol_row++;
            diagnol_column++;
        }

        // Check the bottom right to top left diagnol
        while (diagnol_row >= 1 && diagnol_column >= 1) {
            if (current_state[diagnol_row - 1][diagnol_column - 1] === "#FFFF00") {
                consecutive_count++;
                if (consecutive_count > max_consecutive_count) {
                    max_consecutive_count = consecutive_count;
                }
            }
            else {
                consecutive_count = 0;
            }

            diagnol_row--;
            diagnol_column--;
        }

        consecutive_count = 0;
    }

    if (max_consecutive_count >= 4) {
        endgame();
        return;
    }

    // Check if all buttons are filled
    let buttons = document.getElementsByClassName('game-button')
    let all_buttons_filled = true;

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].disabled === false) {
            all_buttons_filled = false;
        }
    }

    if (all_buttons_filled === true) {
        document.getElementById('draw').hidden = false
    }
}

function simulategravity(id) {
    // Check which button the piece should actually be placed in

    // If a button is on the bottom row, return
    let row_number = parseInt(id[3]);
    if (row_number === 6) {
        return id;
    }

    // If the row below the button is filled, return
    let button_below_id = "btn" + (row_number + 1).toString() + id[4]
    let button_below = document.getElementById(button_below_id)

    if (button_below.disabled === true) {
        return id;
    }

    return simulategravity(button_below_id);
}

function endgame() {
    let buttons = document.getElementsByClassName('game-button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    if (turn % 2 === 0) {
        document.getElementById('red').hidden = false;
    }
    else {
        document.getElementById('yellow').hidden = false;
    }
}

function reset() {
    let buttons = document.getElementsByClassName('game-button')

    for (let i = 0; i < current_state.length; i++) {
        for (let j = 0; j < current_state[i].length; j++) {
            current_state[i][j] = "#1C1C1C";
        }
    }

    document.getElementById('draw').hidden = true;
    document.getElementById('red').hidden = true;
    document.getElementById('yellow').hidden = true;


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].style.backgroundColor = "#1C1C1C";
    }

    turn = 0;
}