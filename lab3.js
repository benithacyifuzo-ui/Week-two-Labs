const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your score (0-100): ", function(input) {
    let score = Number(input);

    if (input.trim() === "" || score < 0 || score > 100 || isNaN(score)) {
        console.log("Invalid score. Enter a number from 0 to 100.");
    } else if (score >= 90) {
        console.log("Your grade is A");
    } else if (score >= 80) {
        console.log("Your grade is B");
    } else if (score >= 70) {
        console.log("Your grade is C");
    } else if (score >= 50) {
        console.log("Your grade is D");
    } else {
        console.log("Your grade is F");
    }

    rl.close();
});