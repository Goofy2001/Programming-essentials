import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
let choices = ['rock','paper','scissors']
let computerChoice = choices[Math.floor(Math.random()*choices.length)]

let humanChoice = await userInput.question("kies: rock, paper of scissors --> ")

console.log("De computer koos voor: " + computerChoice)
let uitkomst

if (humanChoice == 'rock') {
    switch(computerChoice) {
        case ('rock'): 
            uitkomst = "Gelijkspel"
            break
        case ('paper'):
            uitkomst = "Je hebt verloren"
            break
        case ('scissors'):
            uitkomst = "Je hebt gewonnen"
    }
} else if (humanChoice == 'paper') {
       switch(computerChoice) {
        case ('rock'): 
            uitkomst = "Je hebt gewonnen"
            break
        case ('paper'):
            uitkomst = "Gelijkspel"
            break
        case ('scissors'):
            uitkomst = "Je hebt verloren"
    } 
} else {
        switch(computerChoice) {
        case ('rock'): 
            uitkomst = "Je hebt verloren"
            break
        case ('paper'):
            uitkomst = "Je hebt gewonnen"
            break
        case ('scissors'):
            uitkomst = "gelijkspel"
    }
}

console.log(uitkomst)

// code ends here

process.exit()