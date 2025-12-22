// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let hoogte = 9

for (let j = 1; j <= hoogte; j ++) {
    let lijn = ""
    if (j <= (hoogte+1)/2) {
        for(let s = 1; s <= ((hoogte +1)/2)-j; s++) {lijn += " "}
        for(let k = 1; k <=2*j-1; k++) {lijn += "*"}
    console.log(lijn)
    }
    else {
        for(let s = 1; s <= j-((hoogte +1)/2); s++) {lijn += " "}
        for(let k = 1; k <=2*(hoogte - j)+1; k++) {lijn += "*"}
    console.log(lijn)
    }
}

process.exit()