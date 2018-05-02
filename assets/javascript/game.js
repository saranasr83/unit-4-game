$(document).ready(function () {

    // create the variables
    var gameData = {
        wins: 0,
        losses: 0,
        randomNum: 0,
        currentSum: 0,
        scoreSoFar: 0,
        targetNumber: 0
    }

    function setupGame() {
        console.log("setupGame() started.");

        // // Each crystal should have a random hidden value between 1 - 12.
        $("#cupcake-1").val(Math.floor(Math.random() * 12) + 1)
        var cupcake1Value = parseInt($("#cupcake-1").val());
        console.log("cupcake1Val:" + $("#cupcake-1").val());

        $("#cupcake-2").val(Math.floor(Math.random() * 12) + 1)
        console.log("cupcake2Val:" + $("#cupcake-2").val());

        $("#cupcake-3").val(Math.floor(Math.random() * 12) + 1)
        console.log("cupcake3Val:" + $("#cupcake-3").val());

        $("#cupcake-4").val(Math.floor(Math.random() * 12) + 1)
        console.log("cupcake4Val:" + $("#cupcake-4").val());

        // The player will be shown a random number at the start of the game.
        //The random number shown at the start of the game should be between 19 - 120.
        randomTargetNum = Math.floor(Math.random() * 102) + 19
        console.log("TargetNum:" + randomTargetNum);
        $("#generated-num").html(randomTargetNum);

        // // When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
        gameData.currentSum = 0
        // When they do click one, update the player's score counter.
        $("#total-score").html(gameData.currentSum);
        $("#result").html("")
    };

    // The game restarts whenever the player wins or loses.
    // function gameReset() {
    //     console.log("Function to reset the game");
    //     setupGame();
    // }

    //function to update win and loss each time
    function updateWinLoss() {
        // console.log("Function to update win/loss");
        $("#wins").html(gameData.wins);
        $("#losses").html(gameData.losses);
    }

    //This contains the main logic of the game
    // it will be called each time a pic is clicked on
    function playRound(userSelectedVal) {
        console.log("playTurn() called with value:", userSelectedVal);
        gameData.currentSum = gameData.currentSum + userSelectedVal
        // When they do click one, update the player's score counter.
        $("#total-score").html(gameData.currentSum);
        // The player wins if their total score matches the random number from the beginning of the game.
        if (gameData.currentSum === randomTargetNum) {
            console.log("WIN!!resetting game");
            gameData.wins++
            $("#wins").html(gameData.wins)
            alert('Yoohoo, You Won!');
            setupGame();
        }
        // The player loses if their score goes above the random number.
        else if (gameData.currentSum > randomTargetNum) {
            console.log("LOSE!!resetting game");            
            gameData.losses++
            $("#losses").html(gameData.losses)
            alert('Oh, You Lost!');

            setupGame();
        }
        // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
        // updateWinLoss();
    }


    function startGame() {
        console.log("startGame() started.");
        setupGame();

        //now, whenever one of the cupcake is clicked on, 
        //  run one round of the game:
        $("#cupcake-1").click(function () {
            console.log("cupcake-1 is clocked on");
            console.log("calling playRound() with value pic:", parseInt($("#cupcake-1").val()));
            playRound(parseInt($("#cupcake-1").val()));
        });
        $("#cupcake-2").click(function () {
            console.log("cupcake-2 is clocked on");
            playRound(parseInt($("#cupcake-2").val()));
        });
        $("#cupcake-3").click(function () {
            console.log("cupcake-3 is clocked on");
            playRound(parseInt($("#cupcake-3").val()));
        });
        $("#cupcake-4").click(function () {
            console.log("cupcake-4 is clocked on");
            playRound(parseInt($("#cupcake-4").val()));
        });

        // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
        updateWinLoss();
    }
    //Now that the doc is called, let's start the game:
    console.log("main doc started...");
    startGame();
});    
