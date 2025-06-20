let input = document.getElementById("inputBox");
let submitBtn = document.getElementById("submit");
let hintTxt = document.getElementById("hint_txt");
let countTxt = document.getElementById("count_txt");
let resetBtn = document.getElementById("reset");

function startNewGame(){
    randomNum = Math.floor(Math.random() * 100) + 1;
    count = 0;
    hintTxt.textContent = "";
    countTxt.textContent = "";
    input.value = "";
    console.log(randomNum);
}

submitBtn.addEventListener("click", function(startNewGame){
    let userGuess = Number(input.value);

    if (userGuess < 1 || userGuess > 100){
        hintTxt.textContent = "Please enter the number between 1 to 100";
        return;
    }
    else if (userGuess === randomNum){
        hintTxt.textContent = "!!Congratulations!! You entered the right number!";
    }
    else{
        count++;
        countTxt.textContent = `You tried ${count} times`;
    }

    if (userGuess > randomNum){
        hintTxt.textContent = "Too high, try again!";
    }
    else if(userGuess < randomNum){
        hintTxt.textContent = "Too low, try again!";
    }

});

resetBtn.addEventListener("click", startNewGame);

startNewGame();
