let persoonA = {naam: "Thibo", leeftijd: 24}
let persoonB = {naam: "Marte", leeftijd: 25}

function vergelijkLeeftijd(persoon1, persoon2) {
    if (persoon1.leeftijd < persoon2.leeftijd) {
        console.log(persoon2.naam + " is ouder dan " + persoon1.naam)
    } else if (persoon1.leeftijd > persoon2.leeftijd) {
        console.log(persoon2.naam + " is jonger dan " + persoon1.naam)
    } else {console.log("De personen zijn even oud")}
}

vergelijkLeeftijd(persoonA,persoonB)