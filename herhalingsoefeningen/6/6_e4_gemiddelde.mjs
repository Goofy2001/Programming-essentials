import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
let prijzen = [6,12,5,6,8,5,4,6,3,4]

function gemiddelde(array) {
    let som = 0
    for (let i = 0; i < array.length; i++) {
        som += array[i]
    }
    console.log("Het gemiddelde is " + som/array.length + "/som =" + som + " /lengte =" + array.length)
}

gemiddelde(prijzen)

// code ends here
process.exit()