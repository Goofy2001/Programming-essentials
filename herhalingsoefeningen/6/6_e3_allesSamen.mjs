import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
let namen = []

async function namenToevoegen() {
    let array = []
    let naam
    do {
        naam = await userInput.question("Geef een naam / kies s im te stoppen: ")
        if (naam != "s") {array.push(naam)}
    } while (naam != "s")
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] + " is uitgenodigd om deel te nemen aan Programming essentials")
    }
    return array
}

namen = await namenToevoegen()

console.log(namen)
// code ends here
process.exit()