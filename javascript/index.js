var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");
var e = document.querySelector("#e");
var f = document.querySelector("#f");
var g = document.querySelector("#g");
var h = document.querySelector("#h");

var n1 = document.querySelector("#n1");
var n2 = document.querySelector("#n2");
var n3 = document.querySelector("#n3");
var n4 = document.querySelector("#n4");
var n5 = document.querySelector("#n5");
var n6 = document.querySelector("#n6");
var n7 = document.querySelector("#n7");
var n8 = document.querySelector("#n8");

const page = document.getElementById("board");
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
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


//                SELETOR DE FILES E RANKS                //

function addLetters() {
    if (a.selected) {
        letters[0] = 'a';
    }
    else if (!a.selected) {
        letters[0] = '';
    }
    
    if (b.selected) {
        letters[1] = 'b';
    }
    else if (!b.selected) {
        letters[1] = '';
    }
    
    if (c.selected) {
        letters[2] = 'c';
    }
    else if (!c.selected) {
        letters[2] = '';
    }
    
    if (d.selected) {
        letters[3] = 'd';
    }
    else if (!d.selected) {
        letters[3] = '';
    }
    
    if (e.selected) {
        letters[4] = 'e';
    }
    else if (!e.selected) {
        letters[4] = '';
    }
    
    if (f.selected) {
        letters[5] = 'f';
    }
    else if (!f.selected) {
        letters[5] = '';
    }
    
    if (g.selected) {
        letters[6] = 'g';
    }
    else if (!g.selected) {
        letters[6] = '';
    }
    
    if (h.selected) {
        letters[7] = 'h';
    }
    else if (!h.selected) {
        letters[7] = '';
    }
}

function addNumbers() {
    if (n1.selected) {
        numbers[0] = '1';
    }
    else if (!n1.selected) {
        numbers[0] = '';
    }
    
    if (n2.selected) {
        numbers[1] = '2';
    }
    else if (!n2.selected) {
        numbers[1] = '';
    }
    
    if (n3.selected) {
        numbers[2] = '3';
    }
    else if (!n3.selected) {
        numbers[2] = '';
    }
    
    if (n4.selected) {
        numbers[3] = '4';
    }
    else if (!n4.selected) {
        numbers[3] = '';
    }
    
    if (n5.selected) {
        numbers[4] = '5';
    }
    else if (!n5.selected) {
        numbers[4] = '';
    }
    
    if (n6.selected) {
        numbers[5] = '6';
    }
    else if (!n6.selected) {
        numbers[5] = '';
    }
    
    if (n7.selected) {
        numbers[6] = '7';
    }
    else if (!n7.selected) {
        numbers[6] = '';
    }
    
    if (n8.selected) {
        numbers[7] = '8';
    }
    else if (!n8.selected) {
        numbers[7] = '';
    }
}

function allLetters() {
    a.selected = true;
    b.selected = true;
    c.selected = true;
    d.selected = true;
    e.selected = true;
    f.selected = true;
    g.selected = true;
    h.selected = true;
    addLetters();
}

function clearLetters() {
    a.selected = true;
    b.selected = false;
    c.selected = false;
    d.selected = false;
    e.selected = false;
    f.selected = false;
    g.selected = false;
    h.selected = false;
    addLetters();
}

function allNumbers() {
    n1.selected = true;
    n2.selected = true;
    n3.selected = true;
    n4.selected = true;
    n5.selected = true;
    n6.selected = true;
    n7.selected = true;
    n8.selected = true;
    addNumbers();
}

function clearNumbers() {
    n1.selected = true;
    n2.selected = false;
    n3.selected = false;
    n4.selected = false;
    n5.selected = false;
    n6.selected = false;
    n7.selected = false;
    n8.selected = false;
    addNumbers();
}


//                  GERADORES DA BOARD                  //


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

function generateBoardWhite() {
    let lettersTemp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let numbersTemp = ['1', '2', '3', '4', '5', '6', '7', '8'];
    let cont = 0;
    for (let i = 7; i >= 0; i--) {
        for (let j = 0; j < 8; j++) {
            if (cont % 2 != 0) {
                // page.innerHTML += '<div id= "' + letters[i] + numbers[j] + '" class= "dark_color"></div>';
                page.innerHTML += '<div id= "' + lettersTemp[j] + numbersTemp[i] + '" class= "dark_color"></div>';
            }
            else {
                // page.innerHTML += '<div id= "' + letters[i] + numbers[j] + '" class= "light_color"></div>';
                page.innerHTML += '<div id= "' + lettersTemp[j] + numbersTemp[i] + '" class= "light_color"></div>';
            }
            cont++;
            // page.innerHTML += '<div></div>'
        }
        cont++;
    }
}

function generateBoardBlack() {
    let lettersTemp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let numbersTemp = ['1', '2', '3', '4', '5', '6', '7', '8'];
    let cont = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 7; j >= 0; j--) {
            if (cont % 2 != 0) {
                // page.innerHTML += '<div id= "' + letters[i] + numbers[j] + '" class= "dark_color"></div>';
                board.innerHTML += '<div id= "' + lettersTemp[j] + numbersTemp[i] + '" class= "dark_color"></div>';
            }
            else {
                // page.innerHTML += '<div id= "' + letters[i] + numbers[j] + '" class= "light_color"></div>';
                board.innerHTML += '<div id= "' + lettersTemp[j] + numbersTemp[i] + '" class= "light_color"><span>';
            }
            cont++;
            // page.innerHTML += '<div></div>'
        }
        cont++;
    }
}


//                  SELETORES MENU                      //


function selectNotation() {
    let lettersTemp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let numbersTemp = ['1', '2', '3', '4', '5', '6', '7', '8'];
    if (notations.selectedIndex == 0){
        for (let i = 7; i >= 0; i--) {
            for (let j = 0; j < 8; j++) {
                    document.querySelector("#" + lettersTemp[j] + numbersTemp[i]).innerHTML = '';
            }
        }
    }
    else if (notations.selectedIndex == 1){
        for (let i = 7; i >= 0; i--) {
            for (let j = 0; j < 8; j++) {
                    document.querySelector("#" + lettersTemp[j] + numbersTemp[i]).innerHTML = '<span>' + lettersTemp[j] + numbersTemp[i] + '</span>';
            }
        }
    }
}

function selectHandicap() {
    if (handicaps.selectedIndex == 1) {
        if (randomSquareText.innerHTML != '') {
            for (let i = 0; i < 8; i++) {
                document.getElementById(square.charAt(0) + numbers[i]).classList.add("squareOn");
            }
        }
    }
    else if (handicaps.selectedIndex == 2) {
        if (randomSquareText.innerHTML != '') {
            for (let i = 0; i < 8; i++) {
                document.getElementById(letters[i] + square.charAt(1)).classList.add("squareOn");
            }
        }
    }
    else if (handicaps.selectedIndex == 0){
        for (let i = 0; i < 8; i++) {
            if(document.getElementById(square.charAt(0) + numbers[i]).classList.contains("squareOn")) {
                document.getElementById(square.charAt(0) + numbers[i]).classList.remove("squareOn");
            }
        }
        for (let i = 0; i < 8; i++) {
            if(document.getElementById(square.charAt(0) + numbers[i]).classList.contains("squareOn")) {
                document.getElementById(letters[i] + square.charAt(1)).classList.remove("squareOn");
            }
        }
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


//                  GERADOR DE CASA ALEATÓRIO               //


var newNotation;

function generateRandomSquare() {
    let previousNotation = randomSquareText.innerHTML;
    let boolean_equals = true;
    let cont = 0;
    while (boolean_equals) {
        generate();
        if (newNotation == previousNotation) {
            generate();
            cont++;
            if (cont == 10) {
                break;
            }
        }
        else {
            boolean_equals = false;
        }
    }
    if (handicaps.selectedIndex == 1) {
        if (randomSquareText.innerHTML != '') {
            for (let i = 0; i < 8; i++) {
                document.getElementById(square.charAt(0) + numbers[i]).classList.add("squareOn");
            }
        }
    }
    else if (handicaps.selectedIndex == 2) {
        if (randomSquareText.innerHTML != '') {
            for (let i = 0; i < 8; i++) {
                document.getElementById(letters[i] + square.charAt(1)).classList.add("squareOn");
            }
        }
    }
}

var Interval3;
var clickTime2 = 5;
function randomTime() {
    clickTime2--;
    // console.log(clickTime2);
    if (clickTime2 == 0) {
        clearInterval(Interval3);
        overBoard.innerHTML = "";
    }
}

function generate() {    
    if ((a.selected == true || b.selected == true || c.selected == true || d.selected == true || e.selected == true ||
        f.selected == true || g.selected == true || h.selected == true ) && (n1.selected == true || n2.selected == true ||
            n3.selected == true || n4.selected == true || n5.selected == true || n6.selected == true || n7.selected == true ||
             n8.selected == true )) {

            addLetters();
            addNumbers();
        
        let boolean_letters = true;
        let boolean_numbers = true;        
        
        let randomLetter = Math.round(Math.random() * 7);
        let randomNumber = Math.round(Math.random() * 7);
        
        while (boolean_letters) {
            if (letters[randomLetter] == '') {
                randomLetter = Math.round(Math.random() * 7);
            }
            else {
                boolean_letters = false;
            }
        }
            
        while (boolean_numbers) {
            if (numbers[randomNumber] == '') {
                randomNumber = Math.round(Math.random() * 7);
            }
            else {
                boolean_numbers = false;
            }
        }

        square = letters[randomLetter] + numbers[randomNumber];

        
        newNotation = square;
        randomSquare = square;
        randomSquareText.innerHTML = square;
        previousNotation = newNotation;
        overBoard.innerHTML = square;
        clickTime2 = 5;
        clearInterval(Interval3);
        Interval3 = setInterval(randomTime, 150);
    }
}

//                  GERADOR DE CASAS                    //

// function generateRandomSquare() {
//     let randomLetter = Math.round(Math.random() * 7);
//     let randomNumber = Math.round(Math.random() * 7);
//     square = letters[randomLetter] + numbers[randomNumber];
//     if (handicaps.selectedIndex == 1) {
//         document.getElementById(square).classList.add("squareOn");
//     }
//     randomSquare = square;
//     randomSquareText.innerHTML = square;
//     overBoard.innerHTML = square;
// }

function deleteRandomSquare() {
    let lettersTemp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let numbersTemp = ['1', '2', '3', '4', '5', '6', '7', '8'];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (document.getElementById(lettersTemp[i] + numbersTemp[j]).classList.contains('squareOn')) {
                document.getElementById(lettersTemp[i] + numbersTemp[j]).classList.remove('squareOn');
            }
        }
    }
}

function updateSquare() {
    right.innerHTML = gotit;
    wrong.innerHTML = missed;
}

var Interval2;
var clickTime = 5;
var tempSquare;
function squareClicked() {
    clickTime--;
    // console.log(clickTime);
    if (clickTime == 0) {
        clearInterval(Interval2);
        if (document.getElementById(clickedSquare).classList.contains("click_right")) {
            document.getElementById(clickedSquare).classList.remove("click_right");
        }
        else if (document.getElementById(clickedSquare).classList.contains("click_wrong")) {
            document.getElementById(clickedSquare).classList.remove("click_wrong");
        }
    }
}

function divClick(clicked) {
    if (clickTime != 0 && tempSquare != undefined) {
        // console.log("clicktime != 0")
        clearInterval(Interval2);
        if (document.getElementById(tempSquare).classList.contains("click_right")) {
            document.getElementById(tempSquare).classList.remove("click_right");
            // console.log("click_right deleted");
        }
        else if (document.getElementById(tempSquare).classList.contains("click_wrong")) {
            document.getElementById(tempSquare).classList.remove("click_wrong");
            // console.log("click_wrong deleted");
        }
    }
    clickTime = 5;
    clearInterval(Interval2);
    Interval2 = setInterval(squareClicked, 100);
    clickedSquare = clicked;
    if (clicked == square) {
        document.getElementById(clicked).classList.add("click_right");
        document.getElementById("score_log").innerHTML += "<span class=\"click_right_score\">" + (square + ", ") + "</span>";
        gotit++;
    } 
    else {
        document.getElementById(clicked).classList.add("click_wrong");
        document.getElementById("score_log").innerHTML += "<span class=\"click_wrong_score\">" + (square + ", ") + "</span>";
        missed++;
    }
    tempSquare = clicked;
    updateSquare();
    deleteRandomSquare();
    generateRandomSquare();
    squareClicked();
}


//                  FUNÇOES DE INICIO E FIM                 //


function clearScore() {
    gotit = 0;
    missed = 0;
    updateSquare();
}

var appendSeconds = document.getElementById("time");
// var buttonStop = document.getElementById('button-stop');
var Interval;

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
    startButton.classList.add("start_on");
    document.getElementById("custom_board_wrapper").classList.add("start_on");
    document.getElementById("custom_numbers").classList.add("start_on");
    document.getElementById("custom_letters").classList.add("start_on");
    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".custom_button_class")[i].classList.add("start_on");
    }
    if (time.innerHTML == '00') {
        resetTimer();
    }
    if (times.selectedIndex != 0) {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
        startTimer();
    }
    if (colors.selectedIndex == 0) {
        for (let i = 7; i >= 0; i--) {
            for (let j = 0; j < 8; j++) {
                if (letters[j] != '' && numbers[i] != ''){
                    document.querySelector("#" + letters[j] + numbers[i]).setAttribute("onmousedown",  "divClick('" + letters[j] + numbers[i] + "')");
                }
            }
        }
    }
    else if (colors.selectedIndex == 1) {
        for (let i = 0; i < 8; i++) {
            for (let j = 7; j >= 0; j--) {
                if (letters[j] != '' && numbers[i] != ''){
                    document.querySelector("#" + letters[j] + numbers[i]).setAttribute("onmousedown",  "divClick('" + letters[j] + numbers[i] + "')");
                }
            }
        }        
    }
    generateRandomSquare();
}

function stop() {
    clearInterval(Interval);
    deleteRandomSquare();
    if (colors.selectedIndex == 0) {
        for (let i = 7; i >= 0; i--) {
            for (let j = 0; j < 8; j++) {
                if (letters[j] != '' && numbers[i] != ''){
                    document.querySelector("#" + letters[j] + numbers[i]).removeAttribute("onmousedown",  "divClick('" + letters[j] + numbers[i] + "')");
                }
            }
        }
    }
    else if (colors.selectedIndex == 1) {
        for (let i = 0; i < 8; i++) {
            for (let j = 7; j >= 0; j--) {
                if (letters[j] != '' && numbers[i] != ''){
                    document.querySelector("#" + letters[j] + numbers[i]).removeAttribute("onmousedown",  "divClick('" + letters[j] + numbers[i] + "')");
                }
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
    document.getElementById("custom_board_wrapper").classList.remove("start_on");
    document.getElementById("custom_numbers").classList.remove("start_on");
    document.getElementById("custom_letters").classList.remove("start_on");
    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".custom_button_class")[i].classList.remove("start_on");
    }
}

function resetTimer() {
    stop();
    if(time.innerHTML != '') {
        clearInterval(Interval);
        seconds = tempTime;
        appendSeconds.innerHTML = seconds;
    }
    if (document.getElementById("score_log").innerHTML != '') {
        document.getElementById("score_log").innerHTML = '';
    }
    clearScore();
}

function menuClose() {
    document.getElementById("left_board").style.display = "none";
}

function menuOpen() {
    if (document.getElementById("left_board").style.display == "flex") {
        document.getElementById("left_board").style.display = "none";
        document.getElementById("menu_blank_page").style.display = "none";
    }
    else {
        document.getElementById("left_board").style.display = "flex";
        document.getElementById("menu_blank_page").style.display = "flex";
    }
}

selectColor();
allLetters();
allNumbers();

var invisDiv = window.matchMedia('(min-width: 1440px)');

invisDiv.onchange = (e) => {
    if (e.matches) {
    document.getElementById("left_board").style.display = "flex";
    document.getElementById("menu_blank_page").style.display = "none";
  }
  else {
    document.getElementById("left_board").style.display = "none";
  }
}

// if (mediaQuery.matches) {
//   // Then trigger an alert
//     document.getElementById("left_board").style.display = "flex";
//     document.getElementById("menu_blank_page").style.display = "none";
// }