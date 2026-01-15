import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

// code starts here
let height = parseFloat(await userInput.question("Height? "))
let width = parseFloat(await userInput.question("Width? "))
let verdieping = ""

for (let i = 1; i <= height; i++) {
    verdieping = ""
    for (let j = 1; j <= width; j++) {
        if (i == 1 || i == height) {
            verdieping += "*"
        } else {
            if (j == 1 || j == width) {
                verdieping += "*"
            } else {
                verdieping += " "
            }
        }
    }
    console.log(verdieping)
}
// code ends here

process.exit()