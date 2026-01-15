import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

// code starts here
function dagenInMaand(maand, jaartal) {
    let aantalDagen
    if (maand == "april" || maand == "juni" || maand == "september" || maand == "november") { aantalDagen = 30 }
    else if (maand == "februari") {
        if (jaartal % 400 == 0) { aantalDagen = 29 }
        else if (jaartal % 4 == 0 && jaartal % 100 == 0) { aantalDagen = 28 }
        else if (jaartal % 4 == 0 && jaartal % 100 != 0) { aantalDagen = 29 }
        else { aantalDagen = 28 }
    }
    else {aantalDagen = 31}
    console.log(aantalDagen)
}

dagenInMaand("december", 1990)
// code ends here

process.exit()