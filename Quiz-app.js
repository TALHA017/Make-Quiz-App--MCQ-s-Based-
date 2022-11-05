
const prompt = require("prompt-sync")({sigint:true});
var name=prompt("enter your name: ")

// console.log(w)

var score = 15;

while (score > 0 && score < 30) {
    var firstQuestion = prompt("What's the capital of Italy?");
    switch (firstQuestion) {
        case "Rome":
            score = score + 5;
            console.log("Your score is: " + score);
            break;
        default:
            score = score - 5;
            console.log("Your score is: " + score);
            break;
    }

    var secondQuestion = prompt("What's the capital of France?");
    switch (secondQuestion) {
        case "Paris":
            score = score + 5;
            console.log("Your score is: " + score);
            break;
        default:
            score = score - 5;
            console.log("Your score is: " + score);
            break;
    }

    var thirdQuestion = prompt("What's the capital of Spain?");
    switch (thirdQuestion) {
        case "Madrid":
            score = score + 5;
            console.log("Your score is: " + score);
            break;
        default:
            score = score - 5;
            console.log("Your score is: " + score);
            break;
    }

    if (score == 0) {
        console.log(name+": You lose!");
    } else if (score == 30) {
       console.log(name+": You win!");
    } else {
        console.log("Something went wrong!");
    }

}