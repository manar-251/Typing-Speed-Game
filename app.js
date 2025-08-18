const sentences = [
  "I like cats",
  "She runs fast",
  "We are happy today",
  "The dog is very friendly",
  "We went to the park after school",
  "My brother loves to travel to new places",
  "I have been studying English for three years now",
  "They decided to build a treehouse in the backyard",
  "The weather was perfect for a picnic in the park",
  "He is planning to start his own business next year"
];

let startTime, countdown;
let timeLimit = 30;
let timeLeft;
let attempts = 0;
let maxAttempts = 3;
let currentSentence = "";

// Elements
const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("input");
const messageEl = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");
const timeEl = document.getElementById("time");
const progressEl = document.getElementById("progress");
const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const restartBtn = document.getElementById("restartBtn");
const winSound = new Audio('win.mp3');
const loseSound = new Audio('lose.mp3');

// Start Game
function startGame() {
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
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
  progressEl.style.width = "100%";

  startTime = new Date();

  clearInterval(countdown);
  countdown = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    progressEl.style.width = (timeLeft / timeLimit) * 100 + "%";
    if (timeLeft <= 0) {
      endGame(false, "⏰ Time is up! You lose!");
    }
  }, 1000);

  inputEl.focus();
}

// Check Sentence
function checkSentence() {
  const typedSentence = inputEl.value.trim();
  if (typedSentence === currentSentence) {
    const endTime = new Date();
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
    endGame(true, `✅ Correct! You win in ${timeTaken}s`);
  } else {
    attempts++;
    attemptsEl.textContent = attempts;
    if (attempts >= maxAttempts) {
      endGame(false, "❌ Too many attempts! You lose!");
    } else {
      messageEl.textContent = `❌ Wrong! Attempt: ${attempts}/${maxAttempts}`;
    }
  }
}

// End Game
function endGame(win, msg) {
  clearInterval(countdown);
  messageEl.textContent = msg;
  inputEl.disabled = true;
  checkBtn.disabled = true;
  startBtn.disabled = false;

  if (win) winSound.play();
  else loseSound.play();
}

// Restart
function restartGame() {
  sentenceEl.textContent = "Press Start to begin!";
  inputEl.value = "";
  inputEl.disabled = true;
  checkBtn.disabled = true;
  restartBtn.disabled = true;
  startBtn.disabled = false;
  attempts = 0;
  attemptsEl.textContent = attempts;
  timeEl.textContent = "—";
  messageEl.textContent = "";
  progressEl.style.width = "100%";
  clearInterval(countdown);
}

// Events
startBtn.addEventListener("click", startGame);
checkBtn.addEventListener("click", checkSentence);
restartBtn.addEventListener("click", restartGame);
inputEl.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkSentence();
  }
});
