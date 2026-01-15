import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
let maximum = parseFloat(await userInput.question("Tot hoever wil je gaan?"))
let getal1 = 0
let getal2 = 1
let som = 0

while (som < maximum) {
    som = getal1 + getal2
    getal1 = getal2
    getal2 = som
    console.log(som)
}
// code ends here

process.exit()