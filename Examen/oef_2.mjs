/* oefening 2 */
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
//start van eigen code
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function genereerRandomGetallen() {
    let hoeveelheidGetallen = parseFloat(await userInput.question("Hoeveel willekeurige getallen wil je genereren? "))
    if (hoeveelheidGetallen >= 0) {
        let getallenreeks = []
        let getal
        let evenGetallen = 0
        for (let i = 1; i <= hoeveelheidGetallen; i++) {
            getal = random(1, 10)
            getallenreeks.push(getal)
            if (getal % 2 == 0) { evenGetallen++ }
        }
        console.log("De gegenereerde willekeurige getallen zijn: " + getallenreeks)
        console.log("Van de gegenereerde getallen zijn er " + evenGetallen + " even.")
    } else {console.log("Hoeveelheid getallen is foutief")}

}

await genereerRandomGetallen()

//einde van de code
process.exit();

