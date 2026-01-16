/* oefening 4 */
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
//start van eigen code
async function gamesEncyclopedia(gameLibrary) {
    let naam = await userInput.question("Voer de naam van de game in: ")
    let genre = await userInput.question("Voer het genre in: ")
    let creatieDatum = await userInput.question("Voer de creatiedatum van de game in: ")
    let keyword
    let keywords = []
    console.log("Voer de keywords van de game in (typ 'EINDE' om te stoppen): ")
    while (keyword != "EINDE") {
        keyword = await userInput.question("")
        keywords.push(keyword)
    }
    keywords.pop()
    console.log("Naam: " + naam)
    console.log("Genre: " + genre)
    console.log("Creatiedatum: " + creatieDatum)
    console.log("Keywords: " + keywords)
    gameLibrary.push({Naam: naam, Genre: genre, Creatiedatum: creatieDatum, Keywords: keywords})
    return gameLibrary
}

let gameLibrary = []
gameLibrary = await gamesEncyclopedia(gameLibrary)
gameLibrary = await gamesEncyclopedia(gameLibrary)
console.log(gameLibrary)

//einde van de code
process.exit();

