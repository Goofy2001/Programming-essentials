import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
let jaartal = parseFloat(await userInput.question("Geef een jaartal: "))

if (jaartal % 400 == 0) {console.log(jaartal + " is een schrikkeljaar")}
else if (jaartal % 4 == 0 && jaartal % 100 == 0) {console.log(jaartal + " is geen schrikkeljaar")}
else if (jaartal % 4 == 0 && jaartal % 100 != 0) {console.log(jaartal + " is een schrikkeljaar")}
else {console.log(jaartal + " is geen schrikkeljaar")}


// code ends here

process.exit()