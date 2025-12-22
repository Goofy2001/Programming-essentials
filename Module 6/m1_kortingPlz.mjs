function SaleEstimator(prijs) {
    prijs = prijs * 0.85
    return prijs
}

let prijzen = [12, 20, 99, 130, 200]

for (let i = 0; i < prijzen.length; i++) {
    console.log(SaleEstimator(prijzen[i]))
}
