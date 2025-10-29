import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// start eigencode
let som = 0
let aantal = 0
let getal = 0

while (getal != 45) {
    getal = parseFloat(await userInput.question("Geef een getal: "))
    console.log(getal)
    if (getal <= 10) {
        som += getal
        aantal++
    }
}

console.log("Gemiddelde van getallen kleiner of gelijk aan 10: " + som/aantal)   


// einde eigen code

process.exit();