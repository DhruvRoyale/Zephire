const LETTERS = "bcdfghjklmnpqrstvwxyz"
let input = "";
let displayed_string = "";
let current_image = 0;
let used_letters = [];

function makegame() {
    // Hide the input form and make the game
    document.querySelector('#input-container').hidden = true;
    document.querySelector('.hangman-container').hidden = false;

    input = document.querySelector('#input').value.replaceAll(" ", "   ");

    displayed_string = "";

    // Hide all letters
    for (let i = 0; i < input.length; i++) {
        if (LETTERS.includes(input[i].toLowerCase())) {
            displayed_string += "_";
        }
        else {
            displayed_string += input[i];
        }
    }

    // Display the new string
    document.querySelector('#text').innerHTML = displayed_string;

    // Focus the guess field
    document.getElementById('guess').focus();

    // End the game if there are no letters left to be guessed
    if (displayed_string === input) {
        endgame(1)
    }
}

function guessletter() {
    let guess = document.querySelector('#guess').value;

    // Check guess validity
    if (guess.length !== 1) {
        return;
    }

    if (!LETTERS.includes(guess.toLowerCase())) {
        document.querySelector('#guess').value = '';
        return;
    }

    // Return if the letter has been used, else add it to the used letters list
    if (used_letters.includes(guess)) {
        document.querySelector('#guess').value = '';
        return;
    }
    else {
        used_letters.push(guess)

        // Unhide the li tag for the letter
        document.querySelector('#' + guess.toLowerCase()).hidden = false;
    }

    // See if the guess is in the required word
    let is_in_input = false;
    for (let i = 0; i < input.length; i++) {
        if (input[i].toLowerCase() === guess.toLowerCase()) {
            displayed_string = displayed_string.substring(0, i) + input[i] + displayed_string.substring(i + 1);
            is_in_input = true;
        }
    }

    // If not in input, update the image and list
    if (is_in_input === false) {
        current_image++;
        document.querySelectorAll('img')[1].src = "/static/images/Hangman" + current_image.toString() + ".png"

        if (current_image >= 6) {
            endgame(0);
        }
    }

    // Update shown string and focus the guess field
    document.querySelector('#text').innerHTML = displayed_string;
    document.querySelector('#guess').value = '';
    document.getElementById('guess').focus();

    if (displayed_string === input) {
        endgame(1)
    }
}

function endgame(result) {
    if (result === 1) {
        document.querySelector('#win').hidden = false;
    }
    else {
        document.querySelector('#lose').hidden = false;
    }

    document.querySelector('#guess-submit').disabled = true;
}

function reset() {
    // Set everything back
    let li_items = document.querySelectorAll('.letter');

    // Hide used letter list
    for (let i = 0; i < li_items.length; i++) {
        li_items[i].hidden = true;
    }

    // Remove the winner
    document.querySelector('#win').hidden = true;
    document.querySelector('#lose').hidden = true;

    // Set variables back
    used_letters = []
    current_image = 0;
    document.querySelectorAll('img')[1].src = "/static/images/Hangman0.png"

    // Set elements to their original forms
    document.querySelector('#guess-submit').disabled = false;
    document.querySelector('.hangman-container').hidden = true;
    document.querySelector('#input-container').hidden = false;

    // Make it so that on resetting the input field is empty and focus it
    document.querySelector('#input').value = '';
    document.getElementById('input').focus();

    // Clear the guess field
    document.querySelector('#guess').value = '';
}