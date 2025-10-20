import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question("Geef een maand in? ")
let dagen = 0

switch(maand){
    case "februari": dagen = 28
    break
    case "januari": 
    case "maart":
    case "mei": dagen  = 31
    break
    case "april":
    case "juni": dagen = 30
    break
    default: console.log("Deze maand ken ik niet")
}

if(dagen > 1)
    console.log(maand + " bevat " + dagen + " dagen")