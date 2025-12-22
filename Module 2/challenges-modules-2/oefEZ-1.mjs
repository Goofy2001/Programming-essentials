// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef een getal in? "))
if(getal % 2 == 0){
    console.log("het getal is even")
}else{
    console.log("het getal is oneven")
}
console.log(getal)