import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// start eigencode

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let hoeveelheid = parseFloat(await userInput.question("Hoeveel getallen wil je genereren? "))
let getallenReeks = ""
let evenGetallen = 0

for (let i = 1; i <= hoeveelheid; i++) {
    let randomGetal = random(1,10)
    if (i < hoeveelheid) {getallenReeks = getallenReeks + randomGetal + ", "}
    else {getallenReeks = getallenReeks + randomGetal}
    if (randomGetal % 2 == 0) {evenGetallen++}
}
console.log("De gegenereerde willekeurige getallen zijn: " + getallenReeks)
console.log("Van de gegenereerde getallen zijn er " + evenGetallen + " even.")


// einde eigen code

process.exit();