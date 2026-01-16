/* oefening 1 */
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
//start van eigen code
async function gemiddeldeGetallenGroterDan10() {
    console.log("Kies 40 om te stoppen")
    let getal
    let som = 0;
    let aantal = 0;
    while (getal != 40) {
        getal = parseFloat(await userInput.question("Geef een getal: "))
        if (getal >= 10) {
            som += getal
            aantal++
        }
    }
    console.log("Gemiddelde van getallen: " + som/aantal)
    
}

await gemiddeldeGetallenGroterDan10()

//einde van de code
process.exit();

