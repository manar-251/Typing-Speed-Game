const sentences = {
  easy: [
    "I like cats",
    "She runs fast",
    "We are happy today",
    "The dog is friendly",
    "We went to the park"
  ],
  medium: [
    "My brother loves to travel to new places",
    "I have been studying English for three years now",
    "They decided to build a treehouse in the backyard",
    "The weather was perfect for a picnic in the park",
    "He is planning to start his own business next year"
  ],
  hard: [
    "The quick brown fox jumps over the lazy dog",
    "While hiking through the dense forest, we got lost and had to find our way back",
    "Despite the challenges, she managed to complete the marathon in record time",
    "The intricate design of the ancient temple left us in awe and wonder",
    "Programming requires patience, problem-solving, and continuous learning"
  ]
};

let startTime, countdown;
let timeLimit = 30; 
let currentSentence = "";
let selectedLevel = "medium"; 
let timeLeft = timeLimit;

// Elements We need
const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("input");
const messageEl = document.getElementById("message");
const timeEl = document.getElementById("time");
const progressEl = document.getElementById("progress");
const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const restartBtn = document.getElementById("restartBtn");
const levelSelector = document.getElementById("level");

// Sounds
const winSound = new Audio('winning.mp3');
const loseSound = new Audio('losing.mp3'); 

// Level Change Event
levelSelector.addEventListener("change", (e) => {
  selectedLevel = e.target.value; // Update selected level
  updateGameSettings();
});

// Update Game Settings Based on Level
function updateGameSettings() {
  if (selectedLevel === "easy") {
    timeLimit = 40; // More time for Easy
  } else if (selectedLevel === "medium") {
    timeLimit = 30; // Default time for Medium
  } else if (selectedLevel === "hard") {
    timeLimit = 15; // Less time for Hard
  }
}

startBtn.addEventListener("click", () => {
  document.querySelector(".level-select").style.display = "block";
  startBtn.textContent = "Start Game";

  if (startBtn.textContent === "Start Game") {
    startGame();
    startBtn.textContent = "Start"; // Optional
  }
});

levelSelector.addEventListener("change", (e) => {
  selectedLevel = e.target.value;
  updateGameSettings();
});
// Start of the Game
function startGame() {
  const levelSentences = sentences[selectedLevel]; 
  currentSentence = levelSentences[Math.floor(Math.random() * levelSentences.length)];
  sentenceEl.textContent = currentSentence;

  inputEl.value = "";
  inputEl.disabled = false;
  checkBtn.disabled = false;
  restartBtn.disabled = false;
  startBtn.disabled = true;

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
    messageEl.textContent = `❌ Incorrect! Keep trying!`;
  }
}

// Highlight Errors
inputEl.addEventListener("input", () => {
  const userInput = inputEl.value.trim();
  if (!currentSentence.startsWith(userInput)) {
    inputEl.classList.add("error"); // Add red background for incorrect typing
  } else {
    inputEl.classList.remove("error"); // Remove red background for correct typing
  }
});

// End of the Game
function endGame(win, msg) {
  clearInterval(countdown);
  messageEl.textContent = msg;
  inputEl.disabled = true;
  checkBtn.disabled = true;
  startBtn.disabled = false;

  if (win) {
    winSound.play(); 
  } else {
    loseSound.play(); 
  }
}

// Restart
function restartGame() {
  sentenceEl.textContent = "Press Start to begin!";
  inputEl.value = "";
  inputEl.disabled = true;
  checkBtn.disabled = true;
  restartBtn.disabled = true;
  startBtn.disabled = false;
  timeEl.textContent = "—";
  messageEl.textContent = "";
  progressEl.style.width = "100%";
  clearInterval(countdown);
  inputEl.classList.remove("error"); 
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