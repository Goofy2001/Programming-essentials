// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let choices = ['rock', 'paper', 'scissors'];
let computerChoice = ""
let computerPoints = 0

let humanChoice = ""
let humanPoints = 0

for (;computerPoints < 3 && humanPoints < 3;) {
    computerChoice = choices[Math.floor(Math.random()*choices.length)]
    humanChoice = await userInput.question("Kies: rock, paper, scissors? ")
    console.log("Human: " + humanChoice)
    console.log("Computer: " + computerChoice)
    if (computerChoice == humanChoice) {
        console.log("Nobody wins/loses")
    } else if (computerChoice == "rock") {
        if (humanChoice == "paper") {
            console.log("U win")
            humanPoints = humanPoints + 1
        } else {
            console.log("U lose")
            computerPoints = computerPoints + 1
        }
    } else if (computerChoice == "paper") {
        if (humanChoice == "scissors") {
            console.log("U win")
            humanPoints = humanPoints + 1
        } else {
            console.log("U lose")
            computerPoints = computerPoints + 1
        }
    } else {
        if (humanChoice == "rock") {
            console.log("U win")
            humanPoints = humanPoints + 1
        } else {
            console.log("U lose")
            computerPoints = computerPoints + 1
        }
    }
} 

if (computerPoints == 3) {
    console.log("Computer heeft het potje gewonnen, try again")
} else {
    console.log("Je hebt gewonnen")
}

process.exit()