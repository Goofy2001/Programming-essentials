import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef een getal: "))
let som = 0
if (getal <= 0) {process.exit()}
else {som += getal}
getal = parseFloat(await userInput.question("Geef een tweede getal: "))
if (getal <= 0) {process.exit()}
else {som += getal}
getal = parseFloat(await userInput.question("Geef een derde getal: "))
if (getal <= 0) {process.exit()}
else {som += getal}

console.log("De som is " + som)
userInput.close()