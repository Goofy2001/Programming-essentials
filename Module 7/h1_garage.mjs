let autoGarage = {
  naam: "Mercedes AMG Bertem",
  autos: [
    { naam: "GT Black Series", merk: "Mercedes-Benz", bouwjaar: 2021 },
    { naam: "C63 S", merk: "Mercedes-Benz", bouwjaar: 2020 },
    { naam: "E63 S", merk: "Mercedes-Benz", bouwjaar: 2019 },
    { naam: "A45 S", merk: "Mercedes-Benz", bouwjaar: 2022 },
    { naam: "SL63", merk: "Mercedes-Benz", bouwjaar: 2023 }
  ]
}

function vervangAuto (oudeNaam, naam, merk, bouwjaar) {
    console.log(this.autos)
    for (let i = 0; i < this.autos.length; i++) {
        if (this.autos[i].naam == oudeNaam) {
            this.autos[i].naam = naam
            this.autos[i].merk = merk
            this.autos[i].bouwjaar = bouwjaar
            break
        }
    }
    console.log(this.autos)
}

autoGarage.vervangAuto = vervangAuto

autoGarage.vervangAuto("C63 S", "Test naam", "Audi", 2025)
