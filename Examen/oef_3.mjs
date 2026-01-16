/* oefening 3 */
let lijst = []

function voegKostenToe(lijst, kost) {
    if (kost > 0) {
        lijst.push(kost)
        return lijst
    } else {
        console.log("De kost moet hoger zijn dan 0")
        return lijst
    }
}

function maakLijstLeeg(lijst) {
    lijst = []
    return lijst
}

function berekenTotaal(lijst) {
    if (lijst.length == 0) { console.log("Momenteel is mijn lijst leeg") }
    else {
        let totaal = 0
        for (let i = 0; i < lijst.length; i++) {
            totaal += lijst[i]
        }
        console.log("De totale maandelijkse kosten zijn momenteel: " + totaal)

    }
}

lijst = voegKostenToe(lijst, 60.50);
lijst = voegKostenToe(lijst, -1)
lijst = voegKostenToe(lijst, 100)
berekenTotaal(lijst)

lijst = maakLijstLeeg(lijst)

berekenTotaal(lijst)

