// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

// Voeg hier je eigen code in
let score = 0
let antwoord

console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen:')

antwoord = await userInput.question('Vraag 1: Wat is de hoofdstad van Frankrijk?')
console.log('Jouw antwoord: ' + antwoord)
if (antwoord == 'Parijs' || antwoord == 'parijs') {console.log('Goed antwoord!')
    score = score + 1
}
else {console.log('Fout antwoord. Het juiste antwoord was Parijs.')}

antwoord = await userInput.question('Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel?')
console.log('Jouw antwoord: ' + antwoord)
if (antwoord == '8') {console.log('Goed antwoord!')
    score = score + 1
}
else {console.log('Fout antwoord. Het juiste antwoord was 8.')}

antwoord = await userInput.question('Vraag 3: Wat is het grootste zoogdier ter wereld?')
console.log('Jouw antwoord: ' + antwoord)
if (antwoord == 'Blauwe vinvis' || antwoord == 'blauwe vinvis') {console.log('Goed antwoord!')
    score = score + 1
}
else {console.log('Fout antwoord. Het juiste antwoord was Blauwe vinvis.')}

antwoord = await userInput.question("Vraag 4: Wie schreef het toneelstuk 'Romeo en Julia'?")
console.log('Jouw antwoord: ' + antwoord)
if (antwoord == 'Shakespeare' || antwoord == 'shakespeare') {console.log('Goed antwoord!')
    score = score + 1
}
else {console.log('Fout antwoord. Het juiste antwoord was Shakespeare.')}

antwoord = await userInput.question('Vraag 5: Hoeveel poten heeft een spin?')
console.log('Jouw antwoord: ' + antwoord)
if (antwoord == '8') {console.log('Goed antwoord!')
    score = score + 1
}
else {console.log('Fout antwoord. Het juiste antwoord was 8.')}

console.log('Je hebt ' + score + ' van de 5 vragen juist beantwoord.')

process.exit();