import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
//code start hier
async function toevoegenAanMenu() {
    let naam = await userInput.question("Wat is de naam van het gerecht? ")
    let prijs = parseFloat(await userInput.question("Wat is de prijs van het nieuwe gerecht? "))
    this.menu.push({naam:naam, prijs:prijs})
}

let restaurant = {naam: "Dominos", keuken: "Italiaans", menu: [{naam:"4kazen", prijs: 4.80},{naam:"4seizoenen", prijs: 5.00}, {naam: "Bomba", prijs: 5.60}], toevoegenAanMenu}

console.log(restaurant)

await restaurant.toevoegenAanMenu()

console.log(restaurant.menu)
//code eindigt hier
process.exit()