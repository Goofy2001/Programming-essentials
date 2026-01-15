import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
let getal = 0
let iteratie = 0
let som = 0

do {
    getal = parseFloat(await userInput.question("Geef een getal: "))
    iteratie += 1
    som += getal
} while (som/iteratie <= 25)

console.log("gemiddelde is " + som/iteratie + " en is dus over 25. " + som + "/" + iteratie)

// code ends here

process.exit()