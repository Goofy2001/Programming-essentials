// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)]
let computerPoints = 0

let humanChoice = await userInput.question("Kies: rock, paper, scissors? ")
let humanPoints = 0

console.log("Human: " + humanChoice)
console.log("Computer: " + computerChoice)

if (computerChoice == humanChoice) {
    console.log("Nobody wins/loses")
} else if (computerChoice == "rock") {
    if (humanChoice == "paper") {
        console.log("U win")
        humanPoints++
    } else {
        console.log("U lose")
        computerPoints++
    }
} else if (computerChoice == "paper") {
    if (humanChoice == "scissors") {
        console.log("U win")
        humanPoints++
    } else {
        console.log("U lose")
        computerPoints++
    }
} else {
    if (humanChoice == "rock") {
        console.log("U win")
        humanPoints++
    } else {
        console.log("U lose")
        computerPoints++
    }
}



process.exit()