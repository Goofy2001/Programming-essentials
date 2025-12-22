import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// start eigencode
let type = await userInput.question("Wat is het type van het artikel (krant, voeding, medicijnen, restaurant, ...): ")
let prijs = parseFloat(await userInput.question("Wat is de prijs van het artikel (exl btw): "))

function BTWcalculator (getal, type) {
    let percentage
    switch(type) {
        case "krant":
        default: percentage = 1
            break
        case "voeding": 
        case "medicijnen": percentage = 1.06
            break
        case "restaurant": percentage = 1.21
    }
    let prijsMetBTW = percentage * getal
    return prijsMetBTW
}

let totaal = BTWcalculator(prijs, type)
console.log(totaal)


// einde eigen code

process.exit();