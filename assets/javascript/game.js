//Global Variables
var scoreToWin;
var currScore;

var wins = 0;
var losses = 0;

var silver = 0;
var gold = 0;
var red = 0;
var blue = 0;

//Functions
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameStart() {
    currScore = 0;
    scoreToWin = randomNumber(19, 120);

    silver = randomNumber(1, 12);
    gold = randomNumber(1, 12);
    red = randomNumber(1, 12);
    blue = randomNumber(1, 12);

    console.log("current: " + currScore + " to win  " + scoreToWin);
    console.log("silver:" + silver + " gold:" + gold + " red:" + red + " blue:" + blue);

    //Grab IDs & update
    $("#scoreToWin").text(scoreToWin);
    $("#score").text(currScore);
    $("#wins").text(wins);
    $("#losses").text(losses);

}

function compareScores() {

    $("#score").text(currScore);

    if (currScore === scoreToWin) {
        wins++;
        setTimeout(alert("You Win!"), 500);
        gameStart();
    }

    else if (currScore >= scoreToWin) {
        losses++;
        setTimeout(alert("You Lose!"), 500);
        gameStart();
    }

}

$("#silver").on("click", function() {
    currScore = currScore += silver;
    compareScores();
});

$("#gold").on("click", function() {
    currScore = currScore += gold;
    compareScores();
});

$("#red").on("click", function() {
    currScore = currScore += red;
    compareScores();
});

$("#blue").on("click", function() {
    currScore = currScore += blue;
    compareScores();
});

//Start Game
gameStart();
