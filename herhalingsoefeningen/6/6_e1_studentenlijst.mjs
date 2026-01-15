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
    return array
}

namen = await namenToevoegen()

console.log(namen)

// code ends here
process.exit()