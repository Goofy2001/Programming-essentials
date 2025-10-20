// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let getal = parseFloat(await userInput.question("Geef een getal: "))
let vermenigvuldigaar = 1

console.log("De tafel van " + getal + ":")
while (vermenigvuldigaar < 11) {
    console.log(getal + " x " + vermenigvuldigaar + " = " + (vermenigvuldigaar*getal))
    vermenigvuldigaar += 1
}

process.exit()