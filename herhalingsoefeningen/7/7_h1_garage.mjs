let autoGarage = {naam: "Garage Mees", autos: [
  { naam: "A5", merk: "Audi", bouwjaar: 2019 },
  { naam: "Golf", merk: "Volkswagen", bouwjaar: 2015 },
  { naam: "Model 3", merk: "Tesla", bouwjaar: 2021 },
  { naam: "Corsa", merk: "Opel", bouwjaar: 2012 },
  { naam: "Clio", merk: "Renault", bouwjaar: 2018 }
], vervangAuto}


let nieuweAuto5 = {naam: "test_naam", merk: "test", bouwjaar: 999}

function vervangAuto(oudeAuto,nieuweAuto) {
    for (let i = 0; i < this.autos.length; i++) {
        if (this.autos[i].naam == oudeAuto) {
            this.autos[i] = nieuweAuto
        }   
    }
}

autoGarage.vervangAuto("Clio", nieuweAuto5)

console.log(autoGarage)
console.log(autoGarage.autos)


