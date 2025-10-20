// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let getal1 = parseFloat(await userInput.question('Geef een eerste getal: '))
let getal2 = parseFloat(await userInput.question('Geef een tweede getal: '))
let getal3 = parseFloat(await userInput.question('Geef een derde getal: '))
let getal4 = parseFloat(await userInput.question('Geef een vierde getal: '))
let getal5 = parseFloat(await userInput.question('Geef een vijfde getal: '))

if (getal1 >= getal2 && getal1 >= getal3 && getal1 >= getal4 && getal1 >= getal5) {console.log('Hoogste getal: ' + getal1)
    if (getal2 <= getal3 && getal2 <= getal4 && getal2 <= getal5) {console.log('Kleinste getal: ' + getal2)}
    else if (getal3 <= getal4 && getal3 <= getal5) {console.log('Kleinste getal: ' + getal3)}
    else if (getal4 <= getal5) {console.log('Kleinste getal: ' + getal4)}
    else {console.log(('Kleinste getal: ' + getal5))}
}
else if (getal2 >= getal3 && getal2 >= getal4 && getal2 >= getal5) {console.log('Hoogste getal: ' + getal2)
    if (getal1 <= getal3 && getal1 <= getal4 && getal1 <= getal5) {console.log('Kleinste getal: ' + getal1)}
    else if (getal3 <= getal4 && getal3 <= getal5) {console.log('Kleinste getal: ' + getal3)}
    else if (getal4 <= getal5) {console.log('Kleinste getal: ' + getal4)}
    else {console.log(('Kleinste getal: ' + getal5))}
}
else if (getal3 >= getal4 && getal3 >= getal5) {console.log('Hoogste getal: ' + getal3)
    if (getal1 <= getal2 && getal1 <= getal4 && getal1 <= getal5) {console.log('Kleinste getal: ' + getal1)}
    else if (getal2 <= getal4 && getal2 <= getal5) {console.log('Kleinste getal: ' + getal2)}
    else if (getal4 <= getal5) {console.log('Kleinste getal: ' + getal4)}
    else {console.log(('Kleinste getal: ' + getal5))}
}
else if (getal4 >= getal5) {console.log('Hoogste getal: ' + getal4)
    if (getal1 <= getal2 && getal1 <= getal3 && getal1 <= getal5) {console.log('Kleinste getal: ' + getal1)}
    else if (getal2 <= getal3 && getal2 <= getal5) {console.log('Kleinste getal: ' + getal2)}
    else if (getal3 <= getal5) {console.log('Kleinste getal: ' + getal3)}
    else {console.log(('Kleinste getal: ' + getal5))}
}
else {console.log('Hoogste getal: ' + getal5)
    if (getal1 <= getal2 && getal1 <= getal3 && getal1 <= getal4) {console.log('Kleinste getal: ' + getal1)}
    else if (getal2 <= getal3 && getal2 <= getal4) {console.log('Kleinste getal: ' + getal2)}
    else if (getal3 <= getal4) {console.log('Kleinste getal: ' + getal3)}
    else {console.log(('Kleinste getal: ' + getal4))}
}
console.log('Gemiddelde: ' + (getal1 + getal2 + getal3 + getal4 + getal5)/5)
process.exit()