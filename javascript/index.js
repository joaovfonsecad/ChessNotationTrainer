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


function allLetters() {
    a.selected = true;
    b.selected = true;
    c.selected = true;
    d.selected = true;
    e.selected = true;
    f.selected = true;
    g.selected = true;
    h.selected = true;
}

function clearLetters() {
    a.selected = false;
    b.selected = false;
    c.selected = false;
    d.selected = false;
    e.selected = false;
    f.selected = false;
    g.selected = false;
    h.selected = false;
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
}

function clearNumbers() {
    n1.selected = false;
    n2.selected = false;
    n3.selected = false;
    n4.selected = false;
    n5.selected = false;
    n6.selected = false;
    n7.selected = false;
    n8.selected = false;
}

function addLetters() {
    if (a.checked) {
        letters[0] = 'a';
    }
    else if (!a.checked) {
        letters[0] = '';
    }
    
    if (b.checked) {
        letters[1] = 'b';
    }
    else if (!b.checked) {
        letters[1] = '';
    }
    
    if (c.checked) {
        letters[2] = 'c';
    }
    else if (!c.checked) {
        letters[2] = '';
    }
    
    if (d.checked) {
        letters[3] = 'd';
    }
    else if (!d.checked) {
        letters[3] = '';
    }
    
    if (e.checked) {
        letters[4] = 'e';
    }
    else if (!e.checked) {
        letters[4] = '';
    }
    
    if (f.checked) {
        letters[5] = 'f';
    }
    else if (!f.checked) {
        letters[5] = '';
    }
    
    if (g.checked) {
        letters[6] = 'g';
    }
    else if (!g.checked) {
        letters[6] = '';
    }
    
    if (h.checked) {
        letters[7] = 'h';
    }
    else if (!h.checked) {
        letters[7] = '';
    }
}

function addNumbers() {
    if (n1.checked) {
        numbers[0] = '1';
    }
    else if (!n1.checked) {
        numbers[0] = '';
    }
    
    if (n2.checked) {
        numbers[1] = '2';
    }
    else if (!n2.checked) {
        numbers[1] = '';
    }
    
    if (n3.checked) {
        numbers[2] = '3';
    }
    else if (!n3.checked) {
        numbers[2] = '';
    }
    
    if (n4.checked) {
        numbers[3] = '4';
    }
    else if (!n4.checked) {
        numbers[3] = '';
    }
    
    if (n5.checked) {
        numbers[4] = '5';
    }
    else if (!n5.checked) {
        numbers[4] = '';
    }
    
    if (n6.checked) {
        numbers[5] = '6';
    }
    else if (!n6.checked) {
        numbers[5] = '';
    }
    
    if (n7.checked) {
        numbers[6] = '7';
    }
    else if (!n7.checked) {
        numbers[6] = '';
    }
    
    if (n8.checked) {
        numbers[7] = '8';
    }
    else if (!n8.checked) {
        numbers[7] = '';
    }
}


//                  GERADORES DA BOARD                  //


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


//                  SELETORES MENU                      //


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


// //                  GERADOR DE CASA ALEATÓRIO               //

// var newNotation;

// function generateRandomSquare() {
//     var previousNotation = document.querySelector("#random_number p").innerHTML;
//     var boolean_equals = true;
//     let cont = 0;
//     while (boolean_equals) {
//         generate();
//         if (newNotation == previousNotation) {
//             generate();
//             cont++;
//             if (cont == 10) {
//                 break;
//             }
//         }
//         else {
//             boolean_equals = false;
//         }
//     }
// }

// function generate() {    
//     if ((a.selected == true || b.selected == true || c.selected == true || d.selected == true || e.selected == true ||
//         f.selected == true || g.selected == true || h.selected == true ) && (n1.selected == true || n2.selected == true ||
//             n3.selected == true || n4.selected == true || n5.selected == true || n6.selected == true || n7.selected == true ||
//              n8.selected == true )) {
//         addLetters();
//         addNumbers();
        
//         let boolean_letters = true;
//         let boolean_numbers = true;        
        
//         let randomLetter;
//         let randomNumber;
        
//         randomLetter = Math.round(Math.random() * 7);
        
//         while (boolean_letters) {
//             if (letters[randomLetter] == '') {
//                 randomLetter = Math.round(Math.random() * 7);
//             }
//             else {
//                 boolean_letters = false;
//             }
//         }
        
        
//         randomNumber = Math.round(Math.random() * 7);
            
//         while (boolean_numbers) {
//             if (numbers[randomNumber] == '') {
//                 randomNumber = Math.round(Math.random() * 7);
//             }
//             else {
//                 boolean_numbers = false;
//             }
//         }
//         square = letters[randomLetter] + numbers[randomNumber];

        
//         newNotation = square;
//         if (handicaps.selectedIndex == 1) {
//             document.getElementById(square).classList.add("squareOn");
//         }
//         randomSquare = square;
//         randomSquareText.innerHTML = square;
//         overBoard.innerHTML = square;
//         previousNotation = newNotation;
        
//     }
// }

//                  GERADOR DE CASAS                    //




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

function resetTimer() {
    stop();
    if(time.innerHTML != '') {
        clearInterval(Interval);
        seconds = tempTime;
        appendSeconds.innerHTML = seconds;
    }
    clearScore();
}

selectColor();


//                  VERIFICADOR DE QUANTIDADE               //


function checkOneLetter() {
    addLetters();
    addNumbers();

    let cont = 0;

    for (let i = 0; i < 8; i++) {
        if (letters[i] !== '') {
            cont += 1;
        }
    }
    
    if (cont == 1) {
        return true;
    }
    else {
        return false;
    }

}

function checkOneNumber() {
    addLetters();
    addNumbers();

    let cont = 0;

    for (let i = 0; i < 8; i++) {
        if (numbers[i] !== '') {
            cont += 1;
        }
    }

    if (cont == 1) {
        return true;
    }
    else {
        return false;
    }
}

allLetters();
allNumbers();