// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let startTop = false
let startLeft = false
let height = 3


console.log("Output:")


if (startTop == true && startLeft == true) {
    for (let i = 1; i <= height; i++) {
        let print = ""
        for (let j = 1; j <= i; j++) {
            print = print + i
        }
        console.log(print)
    }
} else if (startTop == false && startLeft == true) {
    for (let i = 1; i <= height; i++) {
        let rowLength = height + 1 - i
        let print = ""
        for (let j = 1; j <= rowLength; j++) {
            print = print + rowLength
        }
        console.log(print)
    }
} else if (startTop == true && startLeft == false) {
    for (let i = 1; i <= height; i++) {
        let print = ""
        for (let j = 1; j <= height; j++) {
            if (j >= height + 1 - i) {
                print = print + i
            } else { print = print + " "}
        }
        console.log(print)
    }
} else {
    for (let i = 1; i <= height; i++) {
        let print = ""
        let rowLength = height + 1 - i
        for (let j = 1; j <= height; j++) {
            if (j >= i) {
                print = print + rowLength
            } else {print = print + " "}
        }
        console.log(print)
    }
}

process.exit()