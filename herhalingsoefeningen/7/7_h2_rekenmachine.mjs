function optellen(a,b) {
    let som = a+b
    console.log(som)
}

function aftrekken(a,b) {
    let som = a-b
    console.log(som)
}

function delen(a,b) {
    let som = a/b
    console.log(som)
}

function vermenigvuldigen(a,b) {
    let som = a*b
    console.log(som)
}

let rekenmachine = {optellen, aftrekken, delen, vermenigvuldigen}

rekenmachine.optellen(2,5)
rekenmachine.aftrekken(2,5)
rekenmachine.delen(2,5)
rekenmachine.vermenigvuldigen(2,5)