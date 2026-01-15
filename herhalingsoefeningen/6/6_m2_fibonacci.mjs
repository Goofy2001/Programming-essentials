import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
async function fibonacci() {
    let array = [0,1]
    let getal = parseFloat(await userInput.question("Tot hoeveel cijfers wil je gaan? "))
    if (getal >= 3) {
        for (let i = 2; i < getal; i++) {
            array.push(array[i-2]+array[i-1])
        }
        console.log(array)
    }
}

await fibonacci()
// code ends here
process.exit()