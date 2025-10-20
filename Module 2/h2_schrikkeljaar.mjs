// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let jaarTal = parseFloat(await userInput.question('Geef een jaartal'))

if (jaarTal % 4 == 0 ) {
    if (jaarTal % 100 == 0) {
        if (jaarTal % 400 == 0) {console.log('Het is een schrikkeljaar')}
        else {console.log('Geen schrikkeljaar')}} 
    else {console.log('Schrikkeljaar')}}
else {console.log('Geen schrikkeljaar')}


process.exit()