from tkinter import *
from tkinter import ttk

root = Tk()
root.title("Right Click Test")

def left():
    print("Left Click")

def right():
    print("Right Click")

# ttk.Button(root, text = " ", command = left).grid(column=0, row=0)

testing = ttk.Button(root, text = " ", command = left)
testing.grid(column=0, row=0)
testing.bind("<Button-2>", lambda event: right())

root.mainloop()