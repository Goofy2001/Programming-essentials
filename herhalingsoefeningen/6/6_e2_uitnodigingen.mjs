import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
let namen = ['thibo', 'marte', 'justine', 'tom']

function uitnodigingen(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] + " is uitgenodigd om deel te nemen aan Programming essentials")
    }        
}

uitnodigingen(namen)

// code ends here
process.exit()