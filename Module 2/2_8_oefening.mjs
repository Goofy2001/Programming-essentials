// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let serie = await userInput.question('Wat is je favoriete serie momenteel? ')
let locatie = 0

switch(serie){
    case 'Simpsons':
        locatie = 'Springfield'
        break
    case 'Invincible':
        locatie = 'Washington'
        break
    case 'The boys':
        locatie = 'New york'
        break
    default:
        locatie = 'Onbekend'
}

if (locatie !== 'Onbekend') {console.log(serie + ' vindt plaats in ' + locatie)}
else {console.log('De locatie van ' + serie + ' is onbekend')}

process.exit()