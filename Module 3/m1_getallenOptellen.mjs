// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let getal
let som = 0

do {getal = parseFloat(await userInput.question("Geef een getal: "))
    som = som + getal
} while (getal > 0)

console.log("Som: " + som)

process.exit()