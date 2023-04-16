let turn = 0;
let score_A = 0;
let score_B = 0;

function hovereffect() {
    // Add an effect on hovering
    let button = document.getElementById(event.srcElement.id);
    button.style.backgroundColor = "#FFFFFF";
    button.style.opacity = "50%";
}

function hovereffectclear() {
    // Clear hover effect
    let button = document.getElementById(event.srcElement.id);
    button.style.backgroundColor = "#1C1C1C";
    button.style.opacity = "100%";
}

function simulategame() {
    // Set the clicked button's style and disable it
    let button = document.getElementById(event.srcElement.id);
    button.style.backgroundColor = "#FFFFFF";
    button.style.opacity = "100%";
    button.disabled = true;

    // Save the button's coordinates
    let row_number = parseInt(event.srcElement.id.substring(4, 6));
    let column_number = parseInt(event.srcElement.id.substring(7));

    let box_filled = false;

    // Check if the pressed button is vertical or horizontal
    if (button.classList[0] === 'horizontal') {
        // Horizontal

        // Check if the box above is filled, unless on the top row
        if (!(row_number === 1)) {
            let horizontal_above = document.getElementById('elm-' + (row_number - 2).toString().padStart(2, 0) + ',' + (column_number).toString().padStart(2, 0));
            let vertical_left_above = document.getElementById('elm-' + (row_number - 1).toString().padStart(2, 0) + ',' + (column_number - 1).toString().padStart(2, 0));
            let vertical_right_above = document.getElementById('elm-' + (row_number - 1).toString().padStart(2, 0) + ',' + (column_number + 1).toString().padStart(2, 0));

            // If the box is filled, increase the score
            if (horizontal_above.disabled === true && vertical_left_above.disabled === true && vertical_right_above.disabled === true) {
                let box_above = document.getElementById('elm-' + (row_number - 1).toString().padStart(2, 0) + ',' + (column_number).toString().padStart(2, 0));
                box_filled = true;

                if (turn % 2 === 0) {
                    box_above.innerHTML = 'A';
                    score_A++;
                    document.getElementById('A-score').innerHTML = score_A;
                }
                else {
                    box_above.innerHTML = 'B';
                    score_B++;
                    document.getElementById('B-score').innerHTML = score_B;
                }
            }
        }

        // Check if the box below is filled, unless on the bottom row
        if (!(row_number === 19)) {
            let horizontal_below = document.getElementById('elm-' + (row_number + 2).toString().padStart(2, 0) + ',' + (column_number).toString().padStart(2, 0));
            let vertical_left_below = document.getElementById('elm-' + (row_number + 1).toString().padStart(2, 0) + ',' + (column_number - 1).toString().padStart(2, 0));
            let vertical_right_below = document.getElementById('elm-' + (row_number + 1).toString().padStart(2, 0) + ',' + (column_number + 1).toString().padStart(2, 0));

            // If the box is filled, increase the score
            if (horizontal_below.disabled === true && vertical_left_below.disabled === true && vertical_right_below.disabled === true) {
                let box_below = document.getElementById('elm-' + (row_number + 1).toString().padStart(2, 0) + ',' + (column_number).toString().padStart(2, 0));
                box_filled = true;

                if (turn % 2 === 0) {
                    box_below.innerHTML = 'A';
                    score_A++;
                    document.getElementById('A-score').innerHTML = score_A;
                }
                else {
                    box_below.innerHTML = 'B';
                    score_B++;
                    document.getElementById('B-score').innerHTML = score_B;
                }
            }
        }
    }
    else {
        // Vertical

        // Check if the box to the left is filled, unless on the first column
        if (!(column_number === 1)) {
            let vertical_left = document.getElementById('elm-' + (row_number).toString().padStart(2, 0) + ',' + (column_number - 2).toString().padStart(2, 0));
            let horizontal_left_above = document.getElementById('elm-' + (row_number - 1).toString().padStart(2, 0) + ',' + (column_number - 1).toString().padStart(2, 0));
            let horizontal_left_below = document.getElementById('elm-' + (row_number + 1).toString().padStart(2, 0) + ',' + (column_number - 1).toString().padStart(2, 0));

            // If the box is filled, increase the score
            if (vertical_left.disabled === true && horizontal_left_above.disabled === true && horizontal_left_below.disabled === true) {
                let box_left = document.getElementById('elm-' + (row_number).toString().padStart(2, 0) + ',' + (column_number - 1).toString().padStart(2, 0));
                box_filled = true;

                if (turn % 2 === 0) {
                    box_left.innerHTML = 'A';
                    score_A++;
                    document.getElementById('A-score').innerHTML = score_A;
                }
                else {
                    box_left.innerHTML = 'B';
                    score_B++;
                    document.getElementById('B-score').innerHTML = score_B;
                }
            }
        }

        // Check if the box to the right is filled, unless on the last column
        if (!(column_number === 39)) {
            let vertical_right = document.getElementById('elm-' + (row_number).toString().padStart(2, 0) + ',' + (column_number + 2).toString().padStart(2, 0));
            let horizontal_right_above = document.getElementById('elm-' + (row_number - 1).toString().padStart(2, 0) + ',' + (column_number + 1).toString().padStart(2, 0));
            let horizontal_right_below = document.getElementById('elm-' + (row_number + 1).toString().padStart(2, 0) + ',' + (column_number + 1).toString().padStart(2, 0));

            // If the box is filled, increase the score
            if (vertical_right.disabled === true && horizontal_right_above.disabled === true && horizontal_right_below.disabled === true) {
                let box_right = document.getElementById('elm-' + (row_number).toString().padStart(2, 0) + ',' + (column_number + 1).toString().padStart(2, 0));
                box_filled = true;

                if (turn % 2 === 0) {
                    box_right.innerHTML = 'A';
                    score_A++;
                    document.getElementById('A-score').innerHTML = score_A;
                }
                else {
                    box_right.innerHTML = 'B';
                    score_B++;
                    document.getElementById('B-score').innerHTML = score_B;
                }
            }
        }
    }

    // Change displayed turn, only if a box wasn't filled
    if (!box_filled) {
        if (turn % 2 === 0) {
            document.getElementById('A').style.backgroundColor = "#1C1C1C"
            document.getElementById('B').style.backgroundColor = "#4F4F4F"
        }
        else {
            document.getElementById('A').style.backgroundColor = "#4F4F4F"
            document.getElementById('B').style.backgroundColor = "#1C1C1C"
        }

        turn++;
    }

    // End the game if all boxes are filled
    let boxes = document.getElementsByClassName('box')
    let all_boxes_filled = true;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML === '') {
            all_boxes_filled = false;
        }
    }

    if (all_boxes_filled) {
        endgame();
    }
}

function endgame() {
    if (score_A > score_B) {
        document.querySelector('#A-wins').hidden = false;
    }
    else if (score_A < score_B) {
        document.querySelector('#B-wins').hidden = false;
    }
    else {
        document.querySelector('#tie').hidden = false;
    }
}

function reset() {
    // Set variables back
    turn = 0;
    score_A = 0;
    score_B = 0;

    // Reset shown turn and score
    document.getElementById('A').style.backgroundColor = "#4F4F4F"
    document.getElementById('B').style.backgroundColor = "#1C1C1C"
    document.getElementById('A-score').innerHTML = 0;
    document.getElementById('B-score').innerHTML = 0;

    // Clear all buttons
    let horizontal_buttons = document.getElementsByClassName('horizontal');
    let vertical_buttons = document.getElementsByClassName('vertical');
    let boxes = document.getElementsByClassName('box');

    for (let i = 0; i < horizontal_buttons.length; i++) {
        horizontal_buttons[i].style.backgroundColor = "#1C1C1C";
        horizontal_buttons[i].disabled = false;
    }

    for (let i = 0; i < vertical_buttons.length; i++) {
        vertical_buttons[i].style.backgroundColor = "#1C1C1C";
        vertical_buttons[i].disabled = false;
    }

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = '';
    }

    // Hide shown winner
    document.querySelector('#A-wins').hidden = true;
    document.querySelector('#B-wins').hidden = true;
    document.querySelector('#tie').hidden = true;
}