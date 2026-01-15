import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here

let dagen = parseFloat(await userInput.question("Geef het aantal dagen: "))
let uren = parseFloat(await userInput.question("Geef het aantal uren: "))
let minuten = parseFloat(await userInput.question("Geef het aantal minuten: "))
let seconden = parseFloat(await userInput.question("Geef het aantal seconden: "))

console.log('Aantal seconden: ' + (seconden + 60*(minuten + 60*(uren + 24*dagen))))

process.exit()
