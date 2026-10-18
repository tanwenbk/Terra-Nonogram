Note for reviewer:
I shipped the project last week and got back the message:
"please commit the Nonogram/v2/nonogram.js file to the repo or clarify what happenend to it as we otherwise will have to deflate time."
but all of the files i spent real time working on are uploaded into the repo already :P
all of the files in my folder / the repo at ship time: ('nonogramV2.py' / 'testing.py' / 'learningpyside6.py' were unused)
<img width="336" height="540" alt="image" src="https://github.com/user-attachments/assets/264e1fa7-4b26-4e80-8492-e22395ba873e" />
<img width="1824" height="696" alt="image" src="https://github.com/user-attachments/assets/a8ca452e-c7c3-46f9-9d2b-4143887fe94d" />
<img width="436" height="227" alt="Screenshot 2026-10-18 at 4 31 15 PM" src="https://github.com/user-attachments/assets/bd81ca67-3771-4783-966c-b3dc3334a097" />


HOW TO PLAY:
(Info from https://en.wikipedia.org/wiki/Nonogram)
"Nonograms ... are picture logic puzzles in which cells in a grid must be colored or left blank according to numbers at the edges of the grid to reveal a hidden picture. In this puzzle, the numbers are a form of discrete tomography that measures how many unbroken lines of filled-in squares there are in any given row or column. For example, a clue of "4 8 3" would mean there are sets of four, eight, and three filled squares, in that order, with at least one blank square between successive sets."
The website I created, playable here: https://tannonogram.netlify.app, has five different hard coded puzzles where you can use the clues on the top and on the left of the puzzle to figure out if every cell should be empty or filled just using logic. The final version is made with HTML, CSS, and JavaScript.

Various Files for Hack Club Terra's Prep Week 2

learningtkinter: useless file :P just used to help me familiarize with the tkinter python library
rightclick.py: another test during Version 1
NonogramV1: a Python tkinter version of the nonogram! Very unstylized and has various bugs, but works besides that

index.html + styling.css + nonogramV2.js:
Nonogram Version 2! Posted at https://tannonogram.netlify.app


Creation Process:

I started by learning the python library 'tkinter', learning how to create widgets using the detailed documentation with its various tutorials here: https://tkdocs.com/tutorial/widgets.html
I created a unit converter from Fahrenheit to Celsius as shown here:
<img width="614" height="276" alt="image" src="https://github.com/user-attachments/assets/099dab27-70b9-477b-ad8d-1071d794d069" />

After that, I started working on the Nonogram grid. I made a 10x10 grid of buttons, correlated it to a hard coded list for a solution, and coded the action of clicking a button on the grid turning the button into an X or and O depending on the solution.
<img width="1122" height="1110" alt="image" src="https://github.com/user-attachments/assets/23f6cd42-6d86-4dcd-9b79-72c03cfa9821" />

I made an algorithm to automatically count the number of filled in cells, added lives, and added a right click function, and after some polishing and a win condition, Version 1 was complete!
<img width="1116" height="720" alt="image" src="https://github.com/user-attachments/assets/d21ac5e5-12a3-494e-8fef-1c424b0dc6c2" />

After this, I decided to create Version 2 somewhere more familiar to me (although still quite unfamiliar), deciding to make a website instead.
Over 6 hours, I created a grid, made 100 clickable buttons, added a left click and a left click function for each button, added a solution, made the side numbers and a lives system, and began formatting and stylizing.
<img width="796" height="814" alt="image" src="https://github.com/user-attachments/assets/6d89dbd1-b588-4fcc-bda7-5249a4bbcee8" />
<img width="1008" height="826" alt="image" src="https://github.com/user-attachments/assets/1305dddf-ea3c-4998-aac5-32bf064d7adb" />
<img width="1010" height="988" alt="image" src="https://github.com/user-attachments/assets/63f51a18-a123-47a0-8512-baed7295cc97" />
<img width="1036" height="1084" alt="image" src="https://github.com/user-attachments/assets/16446362-5fda-4d2b-b7cc-d64543872f05" />
<img width="1132" height="584" alt="image" src="https://github.com/user-attachments/assets/f9c6d2b9-3de7-43ef-82ed-bc42c3199e9e" />
<img width="1016" height="1134" alt="image" src="https://github.com/user-attachments/assets/143df033-25c2-43c6-bd21-b5a2d0fb23b0" />
<img width="1204" height="1266" alt="image" src="https://github.com/user-attachments/assets/85ac3693-fb4d-437c-8d0b-01c74fc261a2" />
<img width="1188" height="1556" alt="image" src="https://github.com/user-attachments/assets/357b2383-3fd7-4e6b-9ae6-38359f381526" />
I uploaded the final version after 13.5 hours!

In terms of AI, I used AI in my project including Copilot, Claude, and ChatGPT to debug code that stumped me, to optimize code and help with stylizing, to give me ideas, and to get me started on making something in tkinter that the tutorials made unclear to me.
