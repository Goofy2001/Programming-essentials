// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let Language = await userInput.question('What is your prefered language: EN, FR, NL? ')

if (Language == 'EN') {console.log('Welcome to our application')}
else if (Language == 'FR') {console.log('Bienvenue sur notre application')}
else if (Language == 'NL') {console.log('Welkom op onze applicatie')}
else {console.log('De gekozen taal behoort niet tot ons standaardpakket')}

process.exit()