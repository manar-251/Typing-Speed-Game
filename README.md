Typing Speed Game 🎮⌨️
Game Concept
<img width="1920" height="875" alt="Screenshot 2025-08-23 101532" src="https://github.com/user-attachments/assets/cec2d06e-2b29-4437-8d6c-73aa4169852c" />
<img width="1920" height="879" alt="Screenshot 2025-08-23 101949" src="https://github.com/user-attachments/assets/78b26a49-ed7b-4d64-a7c8-898d3bbc9c90" />

Typing Speed Game is a browser-based game that measures how fast and accurately the player can type a given sentence within a set time limit.
The goal is to finish typing the sentence correctly before the timer ends.

How to Play

The player chooses a level (easy, medium, hard).

A random sentence appears on the screen.

The player must type the sentence correctly into the input field.

If typed correctly, the game ends with results.

The player can check their average typing speed per word and restart the game.

Winning Condition ✅

The player types the full sentence correctly before the timer runs out.

Losing Condition ❌

The timer reaches zero before finishing the sentence correctly.

User Stories

As a user, I want to select a level so I can adjust the difficulty.

As a user, I want a random sentence to appear on the screen so that I can type it as fast as possible.

As a user, I want to type the shown sentence into an input field so that I can try to match it exactly.

As a user, I want immediate feedback when I type incorrectly so that I can fix mistakes quickly.

As a user, I want to see a countdown timer so that I know how much time I have left.

As a user, I want to hear sound effects when I win or lose so that the game feels more interactive.

As a user, I want to see my total time and average time per word so that I can track my performance.

As a user, I want an option to restart the game so that I can try again with a new sentence.

As a user, I want to know if I won or lost based on finishing in time so that I have a clear goal to aim for.



Pseudocode

Set sentence list (array of sentences for easy, medium, hard)
When the game starts:
Show a random sentence on the screen
Start a timer (depends on difficulty level)
Let score = 0
Track total time and word count


While time is not over:
Wait for the player to type
If input is not matching sentence → highlight error
If input matches full sentence → stop timer and calculate result


When the time is over or sentence is correct:
Calculate total time
Calculate average time per word = total time ÷ number of words
If sentence finished before timer → Show “You Win!” + stats +  PLAY win sound and LAUNCH confetti
Else → Show “You Lose!” + PLAY lose sound


Show restart button

