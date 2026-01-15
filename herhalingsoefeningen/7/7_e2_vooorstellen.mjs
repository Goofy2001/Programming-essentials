function stelVoor() {
    if (this.isSpeels == true) {
        console.log("ik ben " + this.naam + ". Ik ben " + this.leeftijd + " jaar oud en ik ben speels.")
    } else {
        console.log("ik ben " + this.naam + ". Ik ben " + this.leeftijd + " jaar oud en ik ben niet speels.")
    }
}

let hond1 = {naam: "Jules", leeftijd: 7, isSpeels: true}
let hond2 = {naam: "Thibo", leeftijd: 24, isSpeels: true, stelVoor: function() {
    if (this.isSpeels == true) {
        console.log("ik ben " + this.naam + ". Ik ben " + this.leeftijd + " jaar oud en ik ben speels.")
    } else {
        console.log("ik ben " + this.naam + ". Ik ben " + this.leeftijd + " jaar oud en ik ben niet speels.")
    }}}
let hond3 = {naam: "Marte", leeftijd: 25, isSpeels: false}

hond1.stelVoor = stelVoor

hond1.stelVoor

console.log(hond1)
console.log(hond2)

console.log(hond1.naam)