function oppervlakteCirkel (straal) {
    let oppervlakte = straal * straal * Math.PI
    return oppervlakte
}

function oppervlakteDriehoek (basis, hoogte) {
    let oppervlakte = basis * hoogte / 2
    return oppervlakte
}

function oppervlakteRechthoek (zijde1, zijde2) {
    let oppervlakte = zijde1 * zijde2
    return oppervlakte
}

function oppervlakteVierkant (zijde) {
    let oppervlakte = oppervlakteRechthoek(zijde, zijde)
    return oppervlakte
}

console.log(oppervlakteVierkant(3))