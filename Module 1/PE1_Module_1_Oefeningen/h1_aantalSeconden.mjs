// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let Dagen = parseFloat(await userInput.question('Geef het aantal dagen: '))
let Uren = parseFloat(await userInput.question('Geef het aantal uren: '))
let Minuten = parseFloat(await userInput.question('Geef het aantal minuten: '))
let Seconden = parseFloat(await userInput.question('Geef het aantal seconden: '))

let somSeconden = Dagen*24*60*60 + Uren*60*60 + Minuten*60 + Seconden

console.log('Aantal seconden: ' + somSeconden)

process.exit();