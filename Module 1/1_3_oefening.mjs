import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let Getal1 = parseFloat(await userInput.question('Geef een getal: '))
let Getal2 = parseFloat(await userInput.question('Geef nog een getal: '))

let som = Getal1 + Getal2
let verschil = Getal1 - Getal2
let product = Getal1 * Getal2
let deling = Getal1 / Getal2

console.log('Je getallen waren '+Getal1+' en '+Getal2+' .')
console.log('De som is: '+ som)
console.log('Het verschil is: ' + verschil)
console.log('Het product is: '+ product)
console.log('De deling is: '+ deling)