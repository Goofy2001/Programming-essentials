// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let getal1 = parseFloat(await userInput.question('Wat is je eerste getal? '))
let getal2 = parseFloat(await userInput.question('Wat is je tweede getal? '))

if (getal1 > getal2) {console.log('Het grootste getal is ' + getal1)}
else {console.log('Het grootste getal is ' + getal2)}

process.exit();