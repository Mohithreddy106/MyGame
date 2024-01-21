function onClick() {
  
  let name = prompt("Please Enter your name: ");
  let gameNum = name.length;
  alert(`Hello ${name.toUpperCase()} ! Welcome to the Number guessing game :)`);
  let userNum = Math.round(prompt(` Guess the Game Number : )`));

  while (userNum !== gameNum) {
    userNum = Math.round(
      prompt(`Badluck ${name.toUpperCase()}, Your guess is wrong. Guess again:\n(Hint: Answer is in Your Name)`)
    );
  }

  document.write(`Congratulations ${name.toUpperCase()}, your Guess is Correct! Great Job`);
}
