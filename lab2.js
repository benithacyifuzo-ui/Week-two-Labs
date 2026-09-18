const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", (firstNumber) => {
    rl.question("Enter the second number: ", (secondNumber) => {

        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);

        console.log("Sum:", num1 + num2);
        console.log("Difference:", num1 - num2);
        console.log("Product:", num1 * num2);

        if (num2 !== 0) {
            console.log("Quotient:", num1 / num2);
            console.log("Remainder:", num1 % num2);
        } else {
            console.log("Cannot divide by zero.");
        }

        rl.close();
    });
});