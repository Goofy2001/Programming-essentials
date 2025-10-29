function toonSaldo () {
    console.log(`Er staat momenteel €${this.saldo} op de rekening met nummer ${this.rekeningnummer}`)
}

function overschrijving (object, bedrag) {
    this.saldo = this.saldo - bedrag
    object.saldo = object.saldo + bedrag
}

let bankrekening1 = {rekeningnummer: 1245, saldo: 500, eigenaar: "Thibo Coudron", toonSaldo, overschrijving}
let bankrekening2 = {rekeningnummer: 1246, saldo: 900, eigenaar: "Tom Coudron", toonSaldo, overschrijving}

bankrekening1.toonSaldo()
bankrekening2.toonSaldo()
bankrekening1.overschrijving(bankrekening2, 400)
bankrekening1.toonSaldo()
bankrekening2.toonSaldo()