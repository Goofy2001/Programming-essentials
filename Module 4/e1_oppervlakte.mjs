// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let zijde1 = parseFloat(await userInput.question("Geef de lengte van de eerste zijde: "))
let zijde2 = parseFloat(await userInput.question("Geef de lengte van de tweede zijde: "))

console.log("De rechthoek heeft een oppervlakte van " + zijde1 * zijde2)

process.exit()