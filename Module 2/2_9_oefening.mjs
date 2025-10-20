// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let currentDay = await userInput.question('What day is it today? ')

switch (currentDay) {
    case 'Saturday':
    case 'Sunday':
        console.log('IT IS WEEKEND.')
        break
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('It is a weekday.')
        break
    default:
        console.log('This is not a known day.')
        break       
}


let num1 = parseFloat(await userInput.question('Geef een eerste getal: '))
let num2 = parseFloat(await userInput.question('Geef een tweede getal: '))

if (num1 == 0 || num2 == 0) {console.log('Eén van de getallen is nul.')}
else if (num1 > 0) {
    if (num2 > 0) {console.log('Beide getallen zijn positief.')}
    else {console.log('Het eerste getal is positief en het tweede getal is negatief.')}
}
else {
    if (num2 > 0) {console.log('Het eerste getal is negatie en het tweede getal is positief.')}
    else {console.log('Beide getallen zijn negatief')}
}


process.exit()