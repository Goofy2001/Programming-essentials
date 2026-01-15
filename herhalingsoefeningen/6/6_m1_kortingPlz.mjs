import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
let prijzen = [12,56,989,54,265,85,487,666]

async function kortingItem(array) {
    let item = parseFloat(await userInput.question("Hoeveelste prijs wil je 15% korting: "))
    let itemKorting = array[item-1]*(1-0.15)
    console.log("De nieuwe prijs is " + itemKorting.toFixed(2))
}

await kortingItem(prijzen)

function kortingArray(array) {
    let arrayKorting = []
    for (let i = 0; i < array.length; i++) {
        arrayKorting.push((array[i]*(1-0.15)).toFixed(2))
    }
    console.log(arrayKorting)
}

kortingArray(prijzen)
// code ends here
process.exit()