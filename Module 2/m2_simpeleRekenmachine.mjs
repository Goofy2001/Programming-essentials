// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let getal1 = parseFloat(await userInput.question('Wat is je eerste getal? '))
let getal2 = parseFloat(await userInput.question('Wat is je tweede getal? '))

let bewerking = await userInput.question('Welke bewerking wil je toepassen (optellen, aftrekken, vermenigvuldigen of delen)? ')

switch (bewerking) {
    case 'optellen':
        console.log(getal1 + getal2)
        break
    case 'aftrekken':
        console.log(getal1 - getal2)
        break
    case 'vermenigvuldigen':
        console.log(getal1 * getal2)
        break
    case 'delen':
        console.log(getal1 / getal2)
}

process.exit()