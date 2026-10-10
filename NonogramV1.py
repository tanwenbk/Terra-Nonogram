from tkinter import *
from tkinter import ttk
import numpy as np


# Create 10x10 grid to start
# Each cell is assigned 2 booleans to determine if it is filled or crossed, or empty
# Cell has (x, y, filled, crossed) variables
# Puzzle has predetermined solution
# If user fills an incorrect cell, var lives is taken away and the cell becomes crossed.

lives = 3

correctsolution = [
    [False, False,  True, False,  True,  True, False, False, False, True],
    [True, False, False, True, False, False, True, True, False, False],
    [True, True, False, True, False, False, False, True, True, True],
    [True, False, True, True, True, True, True, True, True, False],
    [False, True, True, False, True, True, False, True, True, True],
    [False, True, False, False, True, True, True, False, True, True],
    [True, True, True, False, False, True, False, True, True, False],
    [False, False, True, True, True, False, False, False, True, False],
    [False, True, False, True, True, False, False, False, True, False],
    [True, True, False, True, True, True, False, False, True, True]
]
# Top Should Say: 1 1, 1 1, 1 1 1, 1, 1 2 1, 2 1, 1, 1, 1, 1
# Left Should say: 3 1, 0, 0, 0, 2, 1 2, 0, 0, 0, 10

root = Tk()
root.title("Nonogram")

frame = ttk.Frame(root, padding=(3, 3, 12, 12))
frame.grid(column=0, row=0, sticky=(N, W, E, S))

ttk.Label(frame, text = "Lives: ").grid(column = 0, row = 0)
ttk.Label(frame, text = str(lives)).grid(column = 1, row = 0)

class cell:
    def __init__(self, x: int, y: int, filled: bool, crossed: bool):
        self.x = x
        self.y = y
        self.filled = filled
        self.crossed = crossed


def getCount():
    # Gets the number of filled cells in the correct solution for each ROW
    count = 0
    countiteration = 0
    for i in range(10):
        for j in range(9,-1,-1):
            if(correctsolution[i][j] == True):
                count+=1
            elif(correctsolution[i][j] == False and count > 0):
                ttk.Label(frame, text = str(count)).grid(column = 4-countiteration, row = i+5)
                countiteration+=1
                count = 0
        if(countiteration == 0):
            ttk.Label(frame, text = str(count)).grid(column = 4, row = i+5)
            count = 0
        
        if(count > 0):
            ttk.Label(frame, text = str(count)).grid(column = 4-countiteration, row = i+5)
            # print(count)
        countiteration = 0
        count = 0

    count = 0
    
    #Gets the number of filled cells in the correct solution for each COLUMN
    for i in range(10):
        for j in range(9,-1,-1):
            if(correctsolution[j][i] == True):
                count+=1
            elif(correctsolution[j][i] == False and count > 0):
                ttk.Label(frame, text = str(count)).grid(column = i+5, row = 4-countiteration)
                countiteration+=1
                count = 0
        if(countiteration == 0):
            ttk.Label(frame, text = str(count)).grid(column = i+5, row = 4)
            count = 0
        if(count > 0):
            ttk.Label(frame, text = str(count)).grid(column = i+5, row = 4-countiteration)
        countiteration = 0
        count = 0
getCount()

fullgrid = np.zeros((10, 10), dtype=cell)

def cellClicked(h, k):
    global lives
    if(not(lives == 0)):
        print("Cell clicked!")
        print("x: " + str(h) + " y: " + str(k))
        fullgrid[h,k].filled = True
        oldButton = frame.grid_slaves(column=h+5,row=k+5)
        oldButton[0].destroy()
        if(correctsolution[k][h] == True):
            ttk.Button(frame, text = 'O', width=0).grid(column=h+5, row=k+5)
            if(checkWin() == True):
                ttk.Label(frame, text = "You Win!").grid(column = 2, row = 1)
        else:
            lives -= 1
            ttk.Label(frame, text = str(lives)).grid(column = 1, row = 0)
            ttk.Button(frame, text = 'X', width=0).grid(column=h+5, row=k+5)

def cellRightClicked(h, k):
    print("Cell right-clicked!")
    modified = frame.grid_slaves(column=h+5,row=k+5)
    moddedCell = modified[0]
    if(moddedCell.cget("text") == ' '):
        print("emptycell")
        moddedCell.destroy()
        moddedButton = ttk.Button(frame, text = 'X', command = lambda h=h, k=k: cellClicked(h, k), width=0)
        moddedButton.grid(column=h+5, row=k+5)
        moddedButton.bind("<Button-2>", lambda event, h=h, k=k: cellRightClicked(h, k))
    else:
        print("filledcell")
        moddedCell.destroy()
        moddedButton = ttk.Button(frame, text = ' ', command = lambda h=h, k=k: cellClicked(h, k), width=0)
        moddedButton.grid(column=h+5, row=k+5)
        moddedButton.bind("<Button-2>", lambda event, h=h, k=k: cellRightClicked(h, k))


def checkWin():
    for i in range(10):
        for j in range(10):
            if(fullgrid[i,j].filled != correctsolution[j][i]):
                return False
    return True


# Creates the grid of buttons
for i in range(10):
    for j in range(10):
        newcell = cell(i, j, False, False)
        fullgrid[i, j] = newcell
        newbutton = ttk.Button(frame, text = ' ', command = lambda h=i, k=j: cellClicked(h, k), width=0)
        newbutton.grid(column = i+5, row = j+5)
        newbutton.bind("<Button-2>", lambda event, h=i, k=j: cellRightClicked(h, k))
        
        # newcell.bind("<Button-3>", cellRightClicked)

# for k in range(10):
    # ttk.Label(frame, text = str(k)).grid(column = k+5, row = 4)
    # ttk.Label(frame, text = str(k)).grid(column = 4, row = k+5)

root.mainloop()