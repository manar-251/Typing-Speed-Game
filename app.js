const sentences = [
  "I like cats", "She runs fast", "We are happy", "It is sunny", "I can swim",
  "They play soccer every weekend", "He drinks coffee in the morning", "We watch movies on Fridays",
  "She reads books at night", "The dog is very friendly",
  "My brother loves to travel to new places", "The children are playing in the garden",
  "I am learning how to play the guitar", "We went to the park after school",
  "She bought a beautiful dress last week",
  "The weather was perfect for a picnic in the park", "I have been studying English for three years now",
  "They decided to build a treehouse in the backyard", "My parents will visit us during the summer holidays",
  "He is planning to start his own business next year"
];

let startTime;
let countdown;
let timeLimit = 30;
let timeLeft;
let attempts = 0;
let maxAttempts = 3;
let currentSentence = "";

//get Elements
const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("input");
const messageEl = document.getElementById("message");
const mistakesEl = document.getElementById("mistakes");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const restartBtn = document.getElementById("restartBtn");
const winSound = new Audio('win.mp3');
const loseSound = new Audio('lose.mp3');

// Start of the game
function startGame() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  currentSentence = sentences[randomIndex];
  sentenceEl.textContent = currentSentence;

  inputEl.value = "";
  inputEl.disabled = false;
  checkBtn.disabled = false;
  restartBtn.disabled = false;
  startBtn.disabled = true;
  attempts = 0;
  attemptsEl.textContent = attempts;
  messageEl.textContent = "";

  timeLeft = timeLimit;
  timeEl.textContent = timeLeft;

  startTime = new Date();

  clearInterval(countdown);
  countdown = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame(false, "TIME IS UP! YOU LOSE!");
    }
  }, 1000);

  inputEl.focus();
}

// Check typed sentence
function checkSentence() {
  const typedSentence = inputEl.value;
  if (typedSentence === currentSentence) {
    const endTime = new Date();
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
    endGame(true, `✅ Correct! You win! Time: ${timeTaken} seconds`);
  }  

      attempts++;
        attemptsEl.textContent = attempts;
        if (attempts >= maxAttempts) {
        endGame(false, "❌ Too many attempts! You lose!");
  } else {
  messageEl.textContent = `Not Correct! Attempt: ${attempts}/${maxAttempts}`;
  }

  
}

// End of the game
function endGame(win, msg) {
  clearInterval(countdown);
  messageEl.textContent = msg;
  inputEl.disabled = true;
  checkBtn.disabled = true;
  startBtn.disabled = false;
}

// Restart
function restartGame() {
  sentenceEl.textContent = "Press Start to get a sentence.";
  inputEl.value = "";
  inputEl.disabled = true;
  checkBtn.disabled = true;
  restartBtn.disabled = true;
  startBtn.disabled = false;
  attempts = 0;
  attemptsEl.textContent = attempts;
  timeEl.textContent = "—";
  messageEl.textContent = "";
  clearInterval(countdown);
}

// Event listeners
startBtn.addEventListener("click", startGame);
checkBtn.addEventListener("click", checkSentence);
restartBtn.addEventListener("click", restartGame);

// Allow pressing Enter to check
inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkSentence();
  }
});
