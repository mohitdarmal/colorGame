//passing a value of rgbColorArr in num
var num = 6;
// making a variable array which is store six random color of square;
var colorsArr = rgbColorArr(num);
// selecting a square by id
var square = document.querySelectorAll("#square");
// selecting a colorDisplay by id
var colorDisplay = document.querySelector("#colorDisplay");
// making a variable for correctAnswer
var correctAnswer = colorsArr[sixDigitRandomNumber(num)];
//Displaying random number of colorsArr
colorDisplay.textContent = correctAnswer;
//selecting a resetButton by id
var resetButton = document.querySelector("#resetButton");
//selecting a colorDisplayBox by id
var colorDisplayBox = document.querySelector("#colorDisplayBox");
//selecting a anwserReview by id
var anwserReview = document.querySelector("#anwserReview");
//selecting a easyButton by id
var easyButton = document.querySelector("#easyButton");
//selecting a hardButton by id
var hardButton = document.querySelector("#hardButton");



//starting a loop for giving background to square
for (var i = 0; i < square.length; i++) {
    //giving background color to square
    square[i].style.background = colorsArr[i];
    //making a click EventListener, when user click on square it tell us that the ans. is right or wrong
    square[i].addEventListener("click", function () {
        // making a variable clickedSquare, when user click on square it return us a value of square color code
        var clickedSquare = this.style.background;
        if (correctAnswer === clickedSquare) {
            //making a loop when user click on right square then all square color will change into same color
            for (var i = 0; i < square.length; i++) {
                //giving transition when all color is going to same it appers with transition
                this.style.transition = "0.5s"
                //giving same color to all square
                square[i].style.background = correctAnswer;
            }
            colorDisplayBox.style.background = correctAnswer;
            anwserReview.textContent = "Correct!"  
            resetButton.style.background = correctAnswer;
            easyButton.style.background = correctAnswer;
            hardButton.style.background = correctAnswer;
            resetButton.textContent = "Play Again!"          
        }
        //when user click on wrong square then else condtion will show
        else {
            //when user click on wrong square, square background color will change into white
            this.style.background = "#222"
            this.style.transition = "0.5s"
            anwserReview.textContent = "Try Again"
        }
    });
}



//writing a function to pick a random number between 0 to 6
function sixDigitRandomNumber(num) {
    //store a number between 0 to 6 and store in randomsixNumberPick variable
    var randomsixNumberPick = Math.floor(Math.random() * num);
    //return randomsixNumberPick
    return randomsixNumberPick;
}

// function threeDigitRandomNumber() {
//     //store a number between 0 to 6 and store in randomsixNumberPick variable
//     var randomthreeNumberPick = Math.floor(Math.random() * 3);
//     //return randomsixNumberPick
//     return randomthreeNumberPick;
// }



//making a function for colorArr which is give us array of color code
function rgbColorArr(num) {
    // making a empty colors array
    var colors = [];
    // starting a loop and calling 6 rgb color    
    for (var i = 0; i < num; i++) {
        //adding a arrray in colors
        colors.push(rgbColor());
    }
    //returning a colors
    return colors;
}



// making a function which is give us a RGB color code like "rgb(255, 0, 255)"
function rgbColor() {
    // making a var r which is give us color code between 0 to 255
    var r = Math.floor(Math.random() * 255);
    // making a var g which is give us color code between 0 to 255
    var g = Math.floor(Math.random() * 255);
    // making a var b which is give us color code between 0 to 255
    var b = Math.floor(Math.random() * 255);
    //making a rgb var and calling above r + g and b  
    var rgb = "rgb" + "(" + r + ", " + g + ", " + b + ")";
    //retrning a rgb color code
    return rgb;
}

//making a function to displaynone when user click on easyButton and it display none last three square
function displayNone(){
    for(var i = 3; i < square.length; i++){
        square[i].style.display = "none"
    }
} 
//making a function to displayblock when user click on easyButton and it display block last three square
function displayBlock(){
    for(var i = 3; i < square.length; i++){
        square[i].style.display = "block"
    }
} 


//Making a resetButton Click event Listener, when user click on PlayAgain button it reset all game
resetButton.addEventListener("click", function() {
    //Reset all colorArr
    colorsArr = rgbColorArr(num);
    //reset correctAnswer
    
        correctAnswer = colorsArr[sixDigitRandomNumber(num)];
        //changing correctAnswer displaying
        colorDisplay.textContent = correctAnswer;    
        resetButton.style.background = "#e05038"
        hardButton.style.background = "#e05038"
        easyButton.style.background = "#e05038"
        colorDisplayBox.style.background = "#222"
    //changing colorDisplayBox background color where color code shown as a question
    //changing answerReview text
    anwserReview.textContent = ""
    //changing resetButton text 
    resetButton.textContent = "New Colors"          
    for (var i = 0; i < square.length; i++) {
        //giving background color to square
        square[i].style.background = colorsArr[i];
    }    
});



//making a click event listener for easyButton
easyButton.addEventListener("click", function(){
    //adding a class when user click on easyButton
    this.classList.add("selected");
    //remove a selected class when user click on easyButton
    hardButton.classList.remove("selected");
    resetButton.style.background = "#e05038";
    hardButton.style.background = "#e05038";
    easyButton.style.background = "#e05038";
    colorDisplayBox.style.background = "#222";
    num = 3;
    colorsArr = rgbColorArr(num);
    correctAnswer = colorsArr[sixDigitRandomNumber(3)];
    //Displaying random number of colorsArr
    colorDisplay.textContent = correctAnswer;
    for(var i = 0; i < num; i++){
        square[i].style.background = colorsArr[i];
    }
    displayNone();
});



//adding a class on hardButton as a active
hardButton.classList.add("selected");
//making a click event listener for hardButton
hardButton.addEventListener("click", function(){
    //adding a class when user click on hardButton
    this.classList.add("selected");
    //remove a selected class when user click on hardButton
    easyButton.classList.remove("selected");
    resetButton.style.background = "#e05038";
        hardButton.style.background = "#e05038";
        easyButton.style.background = "#e05038";
        colorDisplayBox.style.background = "#222";
    num = 6;
    colorsArr = rgbColorArr(num);
    correctAnswer = colorsArr[sixDigitRandomNumber(6)];
    //Displaying random number of colorsArr
    colorDisplay.textContent = correctAnswer;
    for(var i = 0; i < num; i++){
        square[i].style.background = colorsArr[i];
    }
    displayBlock();
});


// [
// "rgb(255, 0, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 0, 255)",
// "rgb(255, 255, 0)",
// "rgb(255, 0, 255)",
// "rgb(0, 255, 255)"
// ];