import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
let hoogte = parseFloat(await userInput.question("Wat is de hoogte van de piramide: "))
let verdieping = ""

if (hoogte >= 1) {
    for (let i = 1; i <= hoogte; i++) {
        verdieping = ""
        for (let j = 1; j <= i; j++) {
            verdieping = verdieping + "*" 
        }
        console.log(verdieping)
    }
}
// code ends here

process.exit()