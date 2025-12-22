import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// start eigencode
let naam = await userInput.question("Voer de naam van de student in: ")
let opleiding = await userInput.question("Voer de opleiding van de student in: ")
let leeftijd = await userInput.question("Voer de leeftijd van de student in: ")
console.log("Voer de interesses van de student in (typ 'STOP' om te stoppen)")
let interesse = ""
let interessesReeks = []
while (interesse != "STOP") {
    interesse = await userInput.question("- ")
    interessesReeks.push(interesse)
}
userInput.close()
interessesReeks.pop()


function gegevensFormateren() {
    let studentgegevens = {naam: naam, opleiding: opleiding, leeftijd: leeftijd, interesses: interessesReeks}
    console.log(studentgegevens)
    return studentgegevens
}

let student1 = gegevensFormateren()
// einde eigen code

