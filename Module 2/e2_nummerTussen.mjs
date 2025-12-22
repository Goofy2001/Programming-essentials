// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let minimum = 21
let maximum = 35
let getal = parseFloat(await userInput.question('Geef een getal: '))

if (getal >= minimum && getal <= maximum) {console.log('Je getal ' + getal + ' ligt tussen ' + minimum + ' en ' + maximum + '.')}
else {console.log('Je getal ' + getal + ' ligt niet tussen ' + minimum + ' en ' + maximum + '.')}


process.exit()