function onClick() {
  // Game Time
  let name = prompt("Please Enter your name: ");
  let gameNum = name.length;
  alert(`Hello ${name.toUpperCase()} ! Welcome to the Number guessing game :)`);
  let userNum = Math.round(prompt(` It's Game Time! Guess the Game Number : )`));

  while (userNum !== gameNum) {
    userNum = Math.round(
      prompt(`Bad luck ${name.toUpperCase()}, Your guess is wrong. Guess again:\n(Hint: Answer is in Your Name)`)
    );
  }

  document.querySelector('.opt').textContent = `Congratulations ${name.toUpperCase()}, Your Guess is Correct! Great Job`;
}
