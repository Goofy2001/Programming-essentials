// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let start = parseFloat(await userInput.question("Met welk getal beginnen we? "))
let end = parseFloat(await userInput.question("Met welk getal eindigen we? "))
let deler1 = parseFloat(await userInput.question("Wat is het eerste getal waarop we testen? "))
let deler2 = parseFloat(await userInput.question("Wat is het tweede getal waarop we testen? "))

let deelbaar = ""
let deelbaar1 = ""
let deelbaar2 = ""


for (let i = start + 1; i < end; i++)
    if (i % deler1 == 0 && i % deler2 == 0) {deelbaar = deelbaar + " "+ i}
    else {}

for (let i = start + 1; i < end; i++)
    if (i % deler1 == 0) {deelbaar1 = deelbaar1 + " "+ i}
    else {}

for (let i = start + 1; i < end; i++)
    if (i % deler2 == 0) {deelbaar2 = deelbaar2 + " "+ i}
    else {}

let keuze = await userInput.question("Door welk(e) deler(s) moet je getal deelbaar zijn? kies voor D, D1 of D2: ")

switch(keuze) {
    case 'D':
        console.log("Volgende getallen zijn deelbaar door " + deler1 + " en " + deler2 + " : " + deelbaar)
        break
    case 'D1' :
        console.log("Volgende getallen zijn deelbaar door " + deler1 + " : " + deelbaar1)
        break
    case 'D2' :
        console.log("Volgende getallen zijn deelbaar door " + deler2 + " : " + deelbaar2)
        break
}       

process.exit()