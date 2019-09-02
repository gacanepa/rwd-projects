var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2"); // another select method
var resetButton = document.getElementById("reset");

var p1Display = document.getElementById("p1Display");
var p2Display = document.querySelector("#p2Display");

var numInput = document.getElementById("numInput");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = Number(numInput.value); 

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
  numInput.removeAttribute("disabled");
}

function addScore() {
  /* Add function code here */
}


p1Button.addEventListener("click", function() {
  if (!gameOver) {
    /* Function body goes here */
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
      numInput.setAttribute("disabled", true);
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    /* Function body goes here */
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
      numInput.setAttribute("disabled", true);
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  reset();
  winningScore = 5;
  numInput.value = String(winningScore);
})

numInput.addEventListener("change", function() {
  winningScore = Number(this.value);
  reset();
})