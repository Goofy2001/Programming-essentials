// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
console.log('Kies een artiest:')
console.log('1. Red Hot Chili Peppers')
console.log('2. AC/DC')
console.log('3. Netsky')
console.log('4. De Strangers')

let getal = parseFloat(await userInput.question('Geef je keuze in: '))

if (getal == 4) 
    {console.log('Je koos voor "De strangers"')
        console.log('Ze zijn de artist achter de hit: Mijnen blauwe geschelpte')
    }
else if (getal == 2)
    {console.log('Je koos voor "AC/DC"')
        console.log('Ze zijn de artist achter de hit: "Chili con carne')
    }
else if (getal == 3)
    {console.log('Je koos voor "Netsky"')
        console.log('Ze zijn de artist achter de hit: "Vliegeren')
    }
else if (getal == 1)
    {console.log('Je koos voor "Red Hot Chili Peppers"')
        console.log('Ze zijn de artist achter de hit: "Powermeter')
    }
else {console.log('Foute keuze, probeer opnieuw')}


process.exit()