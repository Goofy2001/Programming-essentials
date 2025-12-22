// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let height = 4
let width = 5

for (let i = 1; i <= height; i ++) {
    let print = ""
    if (i == 1 || i == height) {
        for (let j = 1; j <= width; j++) {
            print = print + "*"
        }
    } else {
        for (let j = 1; j <= width; j++) {
            if (j == 1 || j == width) {
                print = print + "*"
            } else {
                print = print + " "
            }
        }
    }
    console.log(print)
}

process.exit()