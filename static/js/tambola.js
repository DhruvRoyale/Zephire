let used_numbers = [];
let speech = new SpeechSynthesisUtterance();
const NUMBER_COUNT = 90;

function generatenumber() {
    // Keep generating until a new number is obtained
    let new_number = Math.floor(Math.random() * NUMBER_COUNT) + 1;

    if (used_numbers.includes(new_number)) {
        generatenumber();
    }
    else {
        // Show the new number and set the list item's background to green
        document.getElementById("generated-number").textContent = new_number;
        let list_item = document.getElementById("li-" + new_number.toString());

        list_item.style.backgroundColor = "#4CAF50";

        used_numbers.push(new_number);

        // Cancel any old speech, then speak the new number
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }

        speech.text = new_number;
        window.speechSynthesis.speak(speech);
    }
}

function changevolume() {
    // Change volume according to the slider
    let volume = document.querySelector('#volume').value;
    speech.volume = volume

    document.querySelector('#volume-display').innerHTML = volume;
}