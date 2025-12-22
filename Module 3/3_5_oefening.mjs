// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let tekst
do {tekst = await userInput.question('Geef iets in: ')
    console.log('Dit was je input: ' + tekst)
} while (tekst !== 'STOP')


let getal;
let som = 0;

for (; som <= 100;) {
    getal = parseFloat(await userInput.question('Geef een getal in: '));
    som += getal;
}

process.exit()