import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// code starts here
let hoogte = parseFloat(await userInput.question("Wat is de hoogte van de diamant: "))
let omtrek = await userInput.question("Wil je enkel de omtrek zien (ja): ")

if (hoogte % 2 != 0) {}
else {
    console.log("Oneven getal is nodig")
    exit()
}

let verdieping = ""

if (omtrek != "ja" && hoogte >= 1) {
    for (let i = 1; i <= hoogte; i++) {
        verdieping = ""
        for (let j = 1; j <= hoogte; j++) {
            if (i <= (hoogte+1)/2) { 
                if (((hoogte+1)/2+1-i) <= j && ((hoogte+1)/2-1+i) >= j) {verdieping += "*"} // 
                else {verdieping += " "}
            }
            else {
                if (((hoogte+1)/2+(hoogte-i)) >= j && ((hoogte+1)/2-(hoogte-i)) <= j) {verdieping += "*"}
                else {verdieping += " "}
            }
        }
        console.log(verdieping)
    }
} else if (omtrek == "ja" && hoogte >= 1) {
    for (let i = 1; i <= hoogte; i++) {
        verdieping=""
        for (let j = 1; j <= hoogte; j++) {
            if (i <= (hoogte + 1)/2) {
                if(((hoogte+1)/2+1-i) == j || ((hoogte + 1)/2-1+i) == j) {verdieping += "*"}
                else {verdieping += " "}
            }
            else {
                if (((hoogte+1)/2+(hoogte-i)) == j || ((hoogte+1)/2-(hoogte-i)) == j) {verdieping += "*"}
                else {verdieping += " "}
            }
        }
        console.log(verdieping)
    }
}
// code ends here

process.exit()