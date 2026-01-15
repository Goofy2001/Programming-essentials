import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

// code starts here
let puntenC = 0
let puntenH = 0
let choices = ['rock', 'paper', 'scissors']
let computerChoice = ""
let humanChoice = ""
let uitkomst =""


while (puntenC < 3 && puntenH < 3) {
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
    humanChoice = await userInput.question("kies: rock, paper of scissors --> ")
    console.log("De computer koos voor: " + computerChoice)
    if (humanChoice == 'rock') {
        switch (computerChoice) {
            case ('rock'):
                uitkomst = "Gelijkspel"
                break
            case ('paper'):
                uitkomst = "Je hebt verloren"
                puntenC++
                break
            case ('scissors'):
                uitkomst = "Je hebt gewonnen"
                puntenH++
                break
        }
    } else if (humanChoice == 'paper') {
        switch (computerChoice) {
            case ('rock'):
                uitkomst = "Je hebt gewonnen"
                puntenH++
                break
            case ('paper'):
                uitkomst = "Gelijkspel"
                break
            case ('scissors'):
                uitkomst = "Je hebt verloren"
                puntenC++
                break
        }
    } else {
        switch (computerChoice) {
            case ('rock'):
                uitkomst = "Je hebt verloren"
                puntenC++
                break
            case ('paper'):
                uitkomst = "Je hebt gewonnen"
                puntenH++
                break
            case ('scissors'):
                uitkomst = "gelijkspel"
                break
        }
    }
    console.log(uitkomst)
    console.log("Puntenstand: " + puntenH + " (jij) / " + puntenC + " (Computer)")
}
console.log("Einduitslag: " + uitkomst)
// code ends here

process.exit()