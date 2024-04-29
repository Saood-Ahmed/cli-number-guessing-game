#! usr/bin/env node
import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "Enter your guess number (Limit from 1 to 5)",
    },
]);
if (answer.guessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
}
else {
    console.log("Sorry! you guesses wrong number.");
}
