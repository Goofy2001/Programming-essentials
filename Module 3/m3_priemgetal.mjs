// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let priemgetal = parseFloat(await userInput.question("Geef een getal: "))
let i

for(i = 2; i <= priemgetal; i++) {
    if (i == priemgetal) {console.log("Het is een priemgetal")}
    else if (priemgetal % i != 0) {}
    else {console.log("Het is geen priemgetal")
        break
    }
}

process.exit()