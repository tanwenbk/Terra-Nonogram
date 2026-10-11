window.lives = 3;
document.getElementById("livesCount").textContent = lives;
window.puzzleSelected = 0;

function changeColor(id) {
    if(lives > 0 && !(checkForWin())){
        const idParent = document.getElementById(id);
        if(checkCorrect(id) == true){
            idParent.style.backgroundColor = "deepskyblue";
            if(checkForWin() == true) {
                document.getElementById("winCheck").textContent = "You Win!"
            }
        }else{
            idParent.style.backgroundColor = "lightgrey";
            idParent.textContent = "X"
            lives -= 1;
            document.getElementById("livesCount").textContent = lives;
        }
    }
    autoComplete(parseInt(id[7]),parseInt(id[9]));
}

function markedRed(btnid){
    const btn = document.getElementById(btnid);

    if(btn.textContent == ""){
        btn.textContent = "X";
    } else if (btn.textContent === "X" && btn.style.backgroundColor != "lightgrey") {
        btn.textContent = "";
    }
}

window.correctsolution = [
//https://liouh.com/picross/

// Seed - 1791645827802
        [[false, false,  true, false,  true,  true, false, false, false, true],
        [true, false, false, true, false, false, true, true, false, false],
        [true, true, false, true, false, false, false, true, true, true],
        [true, false, true, true, true, true, true, true, true, false],
        [false, true, true, false, true, true, false, true, true, true],
        [false, true, false, false, true, true, true, false, true, true],
        [true, true, true, false, false, true, false, true, true, false],
        [false, false, true, true, true, false, false, false, true, false],
        [false, true, false, true, true, false, false, false, true, false],
        [true, true, false, true, true, true, false, false, true, true]],

// Seed - 1791755399617
        [[true,true,false,true,false,false,true,false,true,false],
        [true,true,false,false,false,false,false,false,true,false],
        [false,true,true,true,false,false,true,false,false,true],
        [false,true,false,true,true,true,false,true,false,true],
        [false,false,false,false,false,false,true,true,false,true],
        [false,true,true,false,true,true,false,true,false,false],
        [false,false,true,false,false,false,true,true,false,true],
        [false,true,true,true,true,true,false,true,false,true],
        [false,false,true,false,false,true,false,true,true,false],
        [false,false,false,true,true,false,true,false,true,true]],

// Seed - 1791755772846
        [[false,false,false,true,false,true,false,true,false,false],
        [true,true,true,false,true,false,true,false,true,false],
        [false,false,false,false,true,false,false,true,false,true],
        [true,true,true,true,true,true,false,true,true,false],
        [false,false,false,true,true,false,false,true,false,false],
        [true,false,false,true,true,true,false,true,false,true],
        [true,false,true,true,false,true,false,false,true,false],
        [false,false,true,true,true,true,false,true,false,false],
        [false,true,false,true,false,true,true,true,false,true],
        [false,true,false,true,true,false,false,false,true,false]],

// Seed - 1791756251401
        [[false,false,true,true,true,false,false,false,true,true],
        [false,false,true,true,true,false,false,true,false,true],
        [false,false,true,true,true,false,true,false,false,false],
        [true,true,true,true,true,false,true,true,false,true],
        [false,false,false,true,false,true,false,true,false,true],
        [true,false,false,true,false,true,false,false,true,true],
        [true,false,false,false,false,true,false,false,true,false],
        [true,true,false,true,false,false,true,true,false,false],
        [true,false,false,true,false,false,false,false,false,false],
        [false,false,true,true,false,true,true,true,false,true]],

// Seed - 1791756365167
        [[false,true,false,true,false,true,false,false,false,false],
        [false,true,true,false,true,true,true,false,true,true],
        [true,false,false,false,false,true,true,true,false,true],
        [true,true,true,false,false,true,true,false,false,true],
        [false,true,true,false,true,false,false,false,true,true],
        [true,false,false,false,true,true,true,false,true,true],
        [true,true,false,false,false,true,true,false,false,false],
        [false,true,false,true,false,true,true,true,false,true],
        [true,false,true,false,true,false,true,true,true,true],
        [true,true,false,true,true,false,false,false,true,false]],

];

function checkCorrect(id) {
    // button-x-y -> correctsolution[y-1][x-1]
    return(correctsolution[puzzleSelected][parseInt(id[7],10)][parseInt(id[9],10)]);
}

function getNums() {
    // Row
    count = 0;
    countIteration = 0;
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            if(correctsolution[puzzleSelected][i][j] == true){
                count++;
            }else if(count > 0){
                document.getElementById(`label-${i+1}-0`).textContent += `${count}   `;
                count = 0;
                countIteration++;
            }
        }
        if(countIteration == 0){
            document.getElementById(`label-${i+1}-0`).textContent += `${count}`;
            count = 0;
        }
        if(count > 0){
            document.getElementById(`label-${i+1}-0`).textContent += `${count}`;
            count = 0;
        }
        countIteration = 0;
    }
    //Column
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            if(correctsolution[puzzleSelected][j][i] == true){
                count++;
            }else if(count > 0){
                document.getElementById(`label-0-${i+1}`).textContent += `
                ${count}`;
                count = 0;
                countIteration++;
            }
        }
        if(countIteration == 0){
            document.getElementById(`label-0-${i+1}`).textContent += `${count}`;
            count = 0;
        }
        if(count > 0){
            document.getElementById(`label-0-${i+1}`).textContent += `
            ${count}`;
            count = 0;
        }
        countIteration = 0;
    }
}

function checkForWin() {
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            if(correctsolution[puzzleSelected][i][j] === true && document.getElementById(`button-${i}-${j}`).style.backgroundColor != "deepskyblue"){
                return false;
            }
        }
    }
    return true;
}

function autoComplete(row, col) {
    count1 = 0
    count2 = 0
    // Check if top numbers combined = the amount of blue
    for(let i = 0; i < 10; i++) {
        if(document.getElementById(`button-${i}-${col}`).style.backgroundColor == "deepskyblue"){
            count1++;
        }
        if(correctsolution[puzzleSelected][i][col] == true){
            count2++;
        }
    }
    // If so, Turn any non blue blank squares into Xs
    if(count1 === count2){
        for(let i = 0; i < 10; i++){
            if(document.getElementById(`button-${i}-${col}`).style.backgroundColor != "deepskyblue"){
                document.getElementById(`button-${i}-${col}`).textContent = "X"
            }   
        }
    }

    count1 = 0
    count2 = 0

    // Check if side numbers combined = the amount of blue
    for(let i = 0; i < 10; i++) {
        if(document.getElementById(`button-${row}-${i}`).style.backgroundColor == "deepskyblue"){
            count1++;
        }
        if(correctsolution[puzzleSelected][row][i] == true){
            count2++;
        }
    }
    // If so, Turn any non blue blank squares into Xs
    if(count1 === count2){
        for(let i = 0; i < 10; i++){
            if(document.getElementById(`button-${row}-${i}`).style.backgroundColor != "deepskyblue"){
                document.getElementById(`button-${row}-${i}`).textContent = "X"
            }   
        }
    }
}

function changeLevel(string) {
    number = parseInt(string);
    puzzleSelected = (number-1);
    resetPuzzle();
}

function resetPuzzle() {
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const resetting = document.getElementById(`button-${i}-${j}`)
            resetting.textContent = ""
            resetting.style.backgroundColor = "white"
        }
    }
    for(let i = 1; i <= 10; i++) {
        const resetting1 = document.getElementById(`label-${i}-0`);
        const resetting2 = document.getElementById(`label-0-${i}`);
        resetting1.textContent = ""
        resetting2.textContent = ""
    }
    lives = 3
    document.getElementById("livesCount").textContent = lives;
    document.getElementById("winCheck").textContent = "";
    getNums();
}

getNums();
