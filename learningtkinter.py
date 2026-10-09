from tkinter import *
from tkinter import ttk

# This function is called when the user presses the 'Calculate' button
def calculate(*args):
    degF = float(degreeInput.get())
    degreeOutput.set((degF - 32) * 5/9)

window = Tk()
window.title("Fahrenheit to Celsius")
# Creates a window and names it

frame = ttk.Frame(window, padding=(3, 3, 12, 12))
# Creates a frame inside the window with 'padding' on all sides
# The paramaters are optional and are used for spacing around the frame

frame.grid(column=0, row=0, sticky=(N, W, E, S))
# '.grid' places the frame in the main window in a specific place
# not necessary but is used for style and framing

degreeInput = StringVar()
# Creates a variable to hold the input from the user
ttk.Label(frame, text="Fahrenheit").grid(column=1, row=1, sticky=E)
degreeInput_entry = ttk.Entry(frame, width=7, textvariable=degreeInput)
degreeInput_entry.grid(column=2, row=1, sticky=(W, E))

# Things like entries and buttons are called widgets, and they are children of the
# main window (variable 'frame').
degreeOutput = StringVar()
ttk.Label(frame, text="is equivalent to").grid(column=1, row=2, sticky=E)
ttk.Label(frame, textvariable=degreeOutput).grid(column=2, row=2, sticky=(W, E))
ttk.Label(frame, text="Celsius").grid(column=3, row=2, sticky=W)
ttk.Button(frame, text="Calculate", command=calculate).grid(column=3, row=3, sticky=W)
# places a button in row 3 column 3 that calls function 'calculate' when pressed

window.mainloop()