// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
function serieLocatie (serie) {
    let locatie = ""
    if (serie == 'Breaking Bad') {
        locatie = "New Mexico"
    } else if (serie == "Mindhunter") {
        locatie = "Pennsylvania"
    } else if (serie == "You") {
        locatie = "New York"
    } else {locatie = "Onbekend"}
    if (locatie == "Onbekend") {
        console.log("Sorry, ik weet niet waar de serie " + serie + " zich afspeelt.")
    } else {
        console.log("Je gekozen TV-serie vindt plaats in " + locatie)
        return locatie
    }
}

serieLocatie("You")


process.exit()