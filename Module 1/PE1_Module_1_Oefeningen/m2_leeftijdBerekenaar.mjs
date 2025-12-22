// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let geboorteJaar = parseFloat(await userInput.question('Wat is je geboortejaar? '))
let toekomstJaar = parseFloat(await userInput.question('In welk toekomstig jaar wil je je leeftijd kennen? '))

console.log('In ' + toekomstJaar + ' zal ik ' + (toekomstJaar-geboorteJaar-1) + ' of ' + (toekomstJaar - geboorteJaar) + ' jaar oud zijn.')

process.exit();