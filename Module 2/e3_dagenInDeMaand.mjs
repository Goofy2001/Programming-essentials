// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let maand = await userInput.question('Geef een maand: ')

switch (maand) {
    case 'Januari':
    case 'Maart':
    case 'Mei':
    case 'Juli':
    case 'Augustus':
    case 'Oktober':
    case 'December':
        console.log(maand + ' heeft 31 dagen')
        break
    case 'April':
    case 'Juni':
    case 'September':
    case 'November':
        console.log(maand + ' heeft 30 dagen')
        break
    case 'Februari':
        console.log(maand + 'heeft 28 of 29 dagen.')
        break
    default:
        console.log('Deze maand is onbekend.')
    
}

process.exit()