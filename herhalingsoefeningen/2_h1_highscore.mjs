import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here

let getal1 = parseFloat(await userInput.question("Geef het eerste getal: "))
let getal2 = parseFloat(await userInput.question("Geef het tweede getal: "))
let getal3 = parseFloat(await userInput.question("Geef het derde getal: "))
let getal4 = parseFloat(await userInput.question("Geef het vierde getal: "))
let getal5 = parseFloat(await userInput.question("Geef het vijfde getal: "))

let lowestNumber = 0
let highestNumber = 0
let averageNumber = 0

//lowest number
if (getal1 <= getal2 && getal1 <= getal3 && getal1 <= getal4 && getal1 <= getal5) {
    lowestNumber = getal1
}
else if (getal2 <= getal3 && getal2 <= getal4 && getal2 <= getal5) {
    lowestNumber = getal2
}
else if (getal3 <= getal4 && getal3 <= getal5) {
    lowestNumber = getal3
}
else if (getal4 <= getal5) {
    lowestNumber = getal4
}
else {
    lowestNumber = getal5
}
//highest number
if (getal1 >= getal2 && getal1 >= getal3 && getal1 >= getal4 && getal1 >= getal5) {
    highestNumber = getal1
}
else if (getal2 >= getal3 && getal2 >= getal4 && getal2 >= getal5) {
    highestNumber = getal2
}
else if (getal3 >= getal4 && getal3 >= getal5) {
    highestNumber = getal3
}
else if (getal4 >= getal5) {
    highestNumber = getal4
}
else {
    highestNumber = getal5
}
// gemiddelde
averageNumber = (getal1 + getal2 + getal3 + getal4 + getal5)/5

//console.log
console.log("Laagste getal: " + lowestNumber)
console.log("Gemiddelde: " + averageNumber)
console.log("Hoogste getal: " + highestNumber)

process.exit()