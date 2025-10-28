// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let lijst = []

while (true) {
    let naam = await userInput.question("Geef een naam: ")
    if (naam == "S") {
        break
    }
    lijst.push(naam)
}
console.log(lijst)

process.exit()