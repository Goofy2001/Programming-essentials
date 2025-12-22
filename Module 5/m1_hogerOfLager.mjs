// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}



async function gokken() {
    let randomGetal = random(1, 10)
    let gekozenGetal = parseFloat(await userInput.question("Gok een getal tussen 1 en 10: "))
    if (randomGetal < gekozenGetal) {
        console.log("Fout, het getal is kleiner")
    } else if (randomGetal>gekozenGetal) {
        console.log("Fout, het getal is groter")
    } else {
        console.log("Juist, goed gegokt")
    }
    userInput.close()
} 

gokken()