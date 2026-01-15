import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
let getal1 = parseFloat(await userInput.question("Geef een eerste getal: "))
let getal2 = parseFloat(await userInput.question("Geef een tweede getal: "))

if (getal1 < getal2) {
    for (let i = getal1; i > 0; i--) {
        if (getal1 % i == 0 && getal2 % i == 0) {
            console.log("De ggd is " + i)
        }
    }
} else {
    for (let i = getal2; i > 0; i--) {
        if (getal1 % i == 0 && getal2 % i == 0) {
            console.log("De ggd is " + i)
        }
    }
}
// code ends here

process.exit()