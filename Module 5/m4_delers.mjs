function delers(getal) {
    let rij = "1"
    let som = 0
    for (let i = 2; i < getal; i++) {
        if (getal % i == 0) {
            rij = rij + "+" + i
            som = som + i
        } else {}

    }
    console.log(rij + "=" + som)
}

delers(12)