// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef een getal in? "))
let min = 2
let max = 15

if(getal >= min && getal < max)
    console.log(getal + " ligt tussen " + min + " en " + max )