// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let getal = parseFloat(await userInput.question('Geef een getal: '))

if (getal % 2 == 0) {console.log('Je getal is even')}
else {console.log('Je getal is oneven')}

process.exit()