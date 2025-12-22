let persoon1 = {naam: "Thibo", leeftijd: 25}
let persoon2 = {naam: "Tom", leeftijd: 27}

function vergelijkLeeftijd (object1, object2) {
    if (object1.leeftijd < object2.leeftijd) {console.log(`${object1.naam} is jonger`)}
    else {console.log(`${object1.naam} is ouder`)}
}


vergelijkLeeftijd(persoon1,persoon2)