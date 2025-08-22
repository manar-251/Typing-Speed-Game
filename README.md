UNIT 1 PROJECT
Name: Typing Speed Game



Game Concept:
 Typing Speed Game is a browser-based game that measures how fast and accurately the player can type the given sentence within a set time limit. The goal is to finish typing the sentence correctly before the timer ends.
How to play?
 1- the player chooses a level (easy, medium, hard)
 2- a random sentence appears on the screen
 3- the player must type the sentence correctly into the input field
 4- if typed correctly, the game ends with results
 5- the player can check their average typing speed per word and restart the game
Winning condition:
 If the player types the full sentence correctly before the timer runs out.
Losing condition:
 If the timer reaches zero before finishing the sentence correctly.
User Stories
As a user, I want to select a level so I can adjust the difficulty.


As a user, I want a random sentence to appear on the screen so that I can type it as fast as possible.


As a user, I want to type the shown sentence into an input field so that I can try to match it exactly.


As a user, I want immediate feedback when I type incorrectly so that I can fix mistakes quickly.


As a user, I want to see a countdown timer so that I know how much time I have left.


As a user, I want to hear sound effects when I win or lose so that the game feels more interactive.


As a user, I want to see my total time and the average time per word so that I can track my performance.


As a user, I want an option to restart the game so that I can try again with a new sentence.


As a user, I want to know if I won or lost based on finishing in time so that I have a clear goal to aim for.


Pseudocode:
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
If sentence finished before timer → Show “You Win!” + stats
Else → Show “You Lose!”


Show restart button

