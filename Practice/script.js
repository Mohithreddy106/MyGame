function onClick() {
    let gameNum = 45;
    let userNum = Math.round(prompt("Guess the Game Number :"));
    
    while (userNum !== gameNum) {
        userNum = Math.round(prompt("You entered wrong number. Guess again: "));
    }

    document.write ( "Congratulations, your Guess is Correct! Well Done");
}
