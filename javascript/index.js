const page = document.getElementById("board");
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];
var randomSquare = '';
var clickedSquare = '';
const right = document.getElementById("right");
const wrong = document.getElementById("wrong");
var missed = 0;
var gotit = 0;
right.innerHTML = gotit;
wrong.innerHTML = missed;
var randomSquareText = document.getElementById("random-square-text");
var overBoard = document.getElementById("over_board");
var square;
var time = document.getElementById("time");
var tempTime;
var startButton = document.getElementById("start");
var buttonReset = document.getElementById('reset');



function generateBoardWhite() {
    var cont = 0;
    for (let i = 7; i >= 0; i--) {
        for (let j = 0; j < 8; j++) {
            if (cont % 2 == 0) {
                // page.innerHTML += '<div id= "' + letters[i] + numbers[j] + '" class= "dark_color"></div>';
                page.innerHTML += '<div id= "' + letters[j] + numbers[i] + '" class= "dark_color"></div>';
            }
            else {
                // page.innerHTML += '<div id= "' + letters[i] + numbers[j] + '" class= "light_color"></div>';
                page.innerHTML += '<div id= "' + letters[j] + numbers[i] + '" class= "light_color"></div>';
            }
            cont++;
            // page.innerHTML += '<div></div>'
        }
        cont++;
    }
}

function generateBoardBlack() {
    var cont = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 7; j >= 0; j--) {
            if (cont % 2 == 0) {
                // page.innerHTML += '<div id= "' + letters[i] + numbers[j] + '" class= "dark_color"></div>';
                board.innerHTML += '<div id= "' + letters[j] + numbers[i] + '" class= "dark_color"></div>';
            }
            else {
                // page.innerHTML += '<div id= "' + letters[i] + numbers[j] + '" class= "light_color"></div>';
                board.innerHTML += '<div id= "' + letters[j] + numbers[i] + '" class= "light_color"><span>';
            }
            cont++;
            // page.innerHTML += '<div></div>'
        }
        cont++;
    }
}

function selectColor() {
    if(notations.selectedIndex == 0) {
        board.innerHTML = '';
        if (colors.selectedIndex == 0) {
            generateBoardWhite();
        }
        else if (colors.selectedIndex == 1) {
            generateBoardBlack();
        }   
    }
    else if (notations.selectedIndex == 1) {
        board.innerHTML = '';
        if (colors.selectedIndex == 0) {
            generateBoardWhite();
            selectNotation();
        }
        else if (colors.selectedIndex == 1) {
            generateBoardBlack();
            selectNotation();
        }  
    }
}

function selectNotation() {
    if (notations.selectedIndex == 0){
        if (colors.selectedIndex == 0) {
            for (let i = 7; i >= 0; i--) {
                for (let j = 0; j < 8; j++) {
                        document.querySelector("#" + letters[j] + numbers[i]).innerHTML = '';
                }
            }
        }
        else if (colors.selectedIndex == 1) {
            for (let i = 0; i < 8; i++) {
                for (let j = 7; j >= 0; j--) {
                        document.querySelector("#" + letters[j] + numbers[i]).innerHTML = '';
                }
            }        
        }
    }
    else if (notations.selectedIndex == 1){
        if (colors.selectedIndex == 0) {
            for (let i = 7; i >= 0; i--) {
                for (let j = 0; j < 8; j++) {
                        document.querySelector("#" + letters[j] + numbers[i]).innerHTML = '<span>' + letters[j] + numbers[i] + '</span>';
                }
            }
        }
        else if (colors.selectedIndex == 1) {
            for (let i = 0; i < 8; i++) {
                for (let j = 7; j >= 0; j--) {
                        document.querySelector("#" + letters[j] + numbers[i]).innerHTML = '<span>' + letters[j] + numbers[i] + '</span>';
                }
            }        
        }
    }
}

function selectHandicap() {
    if (handicaps.selectedIndex == 1) {
        document.getElementById(square).classList.add("squareOn");
    }
    else if (handicaps.selectedIndex == 0){
        document.getElementById(square).classList.remove("squareOn");
    }
}

function selectTime() {
    if (times.selectedIndex == 1){
        seconds = 30;
    }
    else if (times.selectedIndex == 2){
        seconds = 60;
    }
    else if (times.selectedIndex == 3){
        seconds = 90;
    }
    else if (times.selectedIndex == 0){
        seconds = null;
    }
    time.innerHTML = seconds;
    tempTime = seconds;
}

function generateRandomSquare() {
    let randomLetter = Math.round(Math.random() * 7);
    let randomNumber = Math.round(Math.random() * 7);
    square = letters[randomLetter] + numbers[randomNumber];
    if (handicaps.selectedIndex == 1) {
        document.getElementById(square).classList.add("squareOn");
    }
    randomSquare = square;
    randomSquareText.innerHTML = square;
    overBoard.innerHTML = square;
}
    
function deleteRandomSquare() {
    document.getElementById(randomSquare).classList.remove("squareOn");
}

function updateSquare() {
    right.innerHTML = gotit;
    wrong.innerHTML = missed;
}

function divClick(clicked) {
    clickedSquare = clicked;
    if (clicked == randomSquare) {
        gotit++;
    } 
    else {
        missed++;
    }
    updateSquare();
    deleteRandomSquare();
    generateRandomSquare();
}

function clearScore() {
    gotit = 0;
    missed = 0;
    updateSquare();
}

var appendSeconds = document.getElementById("time");
// var buttonStop = document.getElementById('button-stop');
var Interval;

function resetTimer() {
    if(time.innerHTML != '') {
        clearInterval(Interval);
        seconds = tempTime;
        appendSeconds.innerHTML = seconds;
    }
    clearScore();
}

function startTimer () {
    seconds--; 

    if(seconds <= 9){
    appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9){
    appendSeconds.innerHTML = seconds;
    }

    if (seconds == 0) {
    clearInterval(Interval);
    stop();
    }
}

function start() {
    if (time.innerHTML == '00') {
        resetTimer();
    }
    if (times.selectedIndex != 0) {
        startButton.classList.add("start_on");
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
        startTimer();
    }
    if (colors.selectedIndex == 0) {
        for (let i = 7; i >= 0; i--) {
            for (let j = 0; j < 8; j++) {
                    document.querySelector("#" + letters[j] + numbers[i]).setAttribute("onmousedown",  "divClick('" + letters[j] + numbers[i] + "')");
            }
        }
    }
    else if (colors.selectedIndex == 1) {
        for (let i = 0; i < 8; i++) {
            for (let j = 7; j >= 0; j--) {
                    document.querySelector("#" + letters[j] + numbers[i]).setAttribute("onmousedown",  "divClick('" + letters[j] + numbers[i] + "')");
            }
        }        
    }
    generateRandomSquare();
}

function stop() {
    clearInterval(Interval);
    document.getElementById(square).classList.remove("squareOn");
    if (colors.selectedIndex == 0) {
        for (let i = 7; i >= 0; i--) {
            for (let j = 0; j < 8; j++) {
                    document.querySelector("#" + letters[j] + numbers[i]).removeAttribute("onmousedown",  "divClick('" + letters[j] + numbers[i] + "')");
            }
        }
    }
    else if (colors.selectedIndex == 1) {
        for (let i = 0; i < 8; i++) {
            for (let j = 7; j >= 0; j--) {
                    document.querySelector("#" + letters[j] + numbers[i]).removeAttribute("onmousedown",  "divClick('" + letters[j] + numbers[i] + "')");
            }
        }        
    }
    randomSquare = '';
    randomSquareText.innerHTML = '';
    overBoard.innerHTML = '';
    if (tempTime == undefined) {
        time.innerHTML = null;
    } 
    square = null;
    startButton.classList.remove("start_on");
}

selectColor();

