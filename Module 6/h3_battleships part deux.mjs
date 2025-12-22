// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in

let speelveld = [["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]]

async function Boat () {
    let length = (parseFloat(await userInput.question("Hoelang moet de boot zijn? ")))
    let richting = await userInput.question("Wat is de richting van de boot? (up, down, left, right) ")
    let X = (parseFloat(await userInput.question("Op de hoeveelste kolom wil je je boot plaatsen? "))) - 1
    let Y = (parseFloat(await userInput.question("Op de hoeveelste rij wil je je boot plaatsen? "))) - 1
    if (richting === "left" && X <= 9 && X + 1 - length >= 0 && Y <= 9 && Y >= 0) {
        for (let i = 1; i <= length; i++) {
            speelveld[Y][X+1-i] = "B"
        }
    } else if (richting === "right" && X >= 0 && X - 1 + length <= 9 && Y <= 9 && Y >= 0) {
        for (let i = 1; i <= length; i++) {
            speelveld[Y][X-1+i] = "B"
        }
    } else if (richting === "up" && X >= 0 && X <= 9 && Y <= 9 && Y - 1 + length >= 0) {
        for (let i = 1; i <= length; i++) {
            speelveld[Y+1-i][X] = "B"
        }
    } else if (richting === "down" && X >= 0 && X <= 9 && Y >= 0 && Y - 1 + length <= 9) {
        for (let i = 1; i <= length; i++) {
            speelveld[Y-1+i][X] = "B"
        }
    } else {console.log("Out of bounds")}
    console.log(speelveld)
    process.exit()
}

async function Shoot () {
    let X = (parseFloat(await userInput.question("Op de hoeveelste kolom wil je schieten? ")))
    let Y = (parseFloat(await userInput.question("Op de hoeveelste rij wil je schieten? ")))
    if (X <= 10 && Y <= 10 && X >= 1 && Y >= 1) {
        speelveld[Y-1][X-1] = "*"
        console.log(speelveld)
        process.exit()
    } else {console.log("Out of bounds")}
}


