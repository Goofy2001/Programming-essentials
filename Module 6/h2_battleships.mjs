// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in

let speelveld = [["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]]

async function Shoot () {
    let X = (parseFloat(await userInput.question("Op de hoeveelste kolom wil je schieten? ")))
    let Y = (parseFloat(await userInput.question("Op de hoeveelste rij wil je schieten? ")))
    if (X <= 10 && Y <= 10 && X >= 1 && Y >= 1) {
        speelveld[Y-1][X-1] = "*"
        console.log(speelveld)
        process.exit()
    } else {console.log("Out of bounds")}
}


