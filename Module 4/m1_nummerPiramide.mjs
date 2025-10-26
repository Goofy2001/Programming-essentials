// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let number = parseFloat(await userInput.question("Geef een nummer: "))
let print = ""
let i = 1
let j = 1

for (i=1; i <= number; i++) {
    print = ""
    for (j=1; j <= i; j++){
        print = print + i + " "
    }
    console.log(print)
}

process.exit()