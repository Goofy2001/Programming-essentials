import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let dagelijkseConsumpties = parseFloat(await userInput.question('Hoeveel koppen koffie, thee of water drink je gemiddeld per dag? '))
let jaarlijkseConsumpties = dagelijkseConsumpties * 365

console.log('U drinkt ongeveer '+ jaarlijkseConsumpties +' consumpties per jaar')

let currentTempInCelcius = parseFloat(await userInput.question('Wat is de huidige temperatuur in graden celcius? '))
let currentTempInFahrenheit = (currentTempInCelcius * 9 / 5) + 32

console.log('De huidige temperatuur (' + currentTempInCelcius+'°C) is '+ currentTempInFahrenheit + '°F.')

let gemiddelde = 0
let getal = parseFloat(await userInput.question('Geef het eerste getal? '))
gemiddelde = getal
getal = parseFloat(await userInput.question('Geef het tweede getal? '))
gemiddelde = gemiddelde + getal
getal = parseFloat(await userInput.question('Geef het derde getal? '))
gemiddelde = gemiddelde + getal
getal = parseFloat(await userInput.question('Geef het vierde getal? '))
gemiddelde = (gemiddelde + getal)/4
console.log('Het gemiddelde van de 4 getallen is: '+ gemiddelde)

userInput.close()