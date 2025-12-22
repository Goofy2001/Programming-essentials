function stelVoor() {
    console.log(`Hallo, ik ben ${this.naam}. Ik ben ${this.leeftijd} jaar oud en ik ben speels.`)
}

let hond1 = {naam: "Joske", leeftijd: 5, isSpeels: true, };
hond1.stelVoor = stelVoor
let hond2 = {naam: "Bobby", leeftijd: 2, isSpeels: true};
hond2.stelVoor = stelVoor
let hond3 = {naam: "Mira", leeftijd: 8, isSpeels: false};
hond3.stelVoor = stelVoor
let hond4 = {naam: "Rex", leeftijd: 4, isSpeels: true};
hond4.stelVoor = stelVoor
let hond5 = {naam: "Luna", leeftijd: 6, isSpeels: false};
hond5.stelVoor = stelVoor
let hond6 = {naam: "Max", leeftijd: 3, isSpeels: true};
hond6.stelVoor = stelVoor
let hond7 = {naam: "Zita", leeftijd: 7, isSpeels: false};
hond7.stelVoor = stelVoor
let hond8 = {naam: "Charlie", leeftijd: 1, isSpeels: true};
hond8.stelVoor = stelVoor
let hond9 = {naam: "Nala", leeftijd: 9, isSpeels: false};
hond9.stelVoor = stelVoor
let hond10 = {naam: "Diesel", leeftijd: 5, isSpeels: true};
hond10.stelVoor = stelVoor

let honden = [hond1, hond2, hond3, hond4, hond5, hond6,hond7,hond8, hond9, hond10]

hond10.stelVoor()
