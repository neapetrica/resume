let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No number");
  } else if (guess === number) {
    displayMessage("Correct number!");
    document.querySelector(".backgroundSection").style.background = "green";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = number;
    document.querySelector(".guessTitle").textContent = "You guessed it!";
    document.querySelector(".guessTitle").style.color = "green";
    document.querySelector(".guess").style.borderColor = "#eee";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
      console.log(highScore);
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > number ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").style.borderColor = "red";
    } else {
      displayMessage("You Lost");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".backgroundSection").style.background = "#f1f7f7";
  document.querySelector(".number").style.width = "8rem";
  document.querySelector(".guessTitle").textContent = "Guess my number!";
  document.querySelector(".guessTitle").style.color = "black";
  document.querySelector(".guess").style.borderColor = "#eee";
});
