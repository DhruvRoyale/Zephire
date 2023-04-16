function redirect() {
    let id = event.srcElement.id

    switch (id) {
        case 'dots-and-boxes':
            console.log("redirect please")
            window.location.href = "/dots-and-boxes";
            break;

        case 'connect-four':
            window.location.href = "/connect-four";
            break;

        case 'tic-tac-toe':
            window.location.href = "/tic-tac-toe";
            break;

        case 'hangman':
            window.location.href = "/hangman";
            break;

        case 'tambola':
            window.location.href = "/tambola";
            break;
    }
}