// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let som = 0
let gemiddelde = 0

for (let i = 1; gemiddelde < 25; i ++) {
    let getal = parseFloat(await userInput.question("Geef een getal: "))
    som = som + getal
    gemiddelde = som / i
    console.log("Het gemiddelde is " + gemiddelde)
}

console.log(gemiddelde)

process.exit()