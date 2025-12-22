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
    let gekozenGetal = 0
    let pogingen = 0
    while (gekozenGetal != randomGetal) {
        gekozenGetal = parseFloat(await userInput.question("Gok een getal tussen 1 en 10: "))
        if (pogingen == 2) {
            console.log("Game Over")
            break
        } else if (randomGetal < gekozenGetal) {
            console.log("Fout, het getal is kleiner")
            pogingen = pogingen + 1
        } else if (randomGetal>gekozenGetal) {
            console.log("Fout, het getal is groter")
            pogingen = pogingen + 1
        } else {
            console.log("Juist, goed gegokt")
            break
        }
        
    }
    userInput.close()
} 

gokken()

