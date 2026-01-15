function toonSaldo() {
    console.log("Er staat momentaal $" + this.saldo + " op rekening met nummer " + this.rekeningnummer)
}

function overschrijving(ontvanger, bedrag) {
    this.saldo -= bedrag
    ontvanger.saldo += bedrag
}

let bankRekening = {rekeningnummer: 12, saldo: 50, eigenaar: "Thibo", toonSaldo, overschrijving}
let rekening = {rekeningnummer: 13, saldo: 200, eigenaar: "Choco", toonSaldo, overschrijving}

bankRekening.toonSaldo()
bankRekening.overschrijving(rekening, 50)
bankRekening.toonSaldo()
rekening.toonSaldo()