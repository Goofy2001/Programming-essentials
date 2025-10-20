// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let hoogte = 4
let lijn

for(let i = 0; i <= hoogte; i++) {
    lijn = ""
    for(let j = 0; j < i; j ++) {
        lijn += "*"
    }
    console.log(lijn)
}


process.exit()