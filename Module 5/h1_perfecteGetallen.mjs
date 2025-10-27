function PerfectNumbers(start, stop) {
    for (let i = start; i <= stop; i++) {
        let som = 0
        for(let j = 1; j < i; j++) {
            if (i % j == 0) {
                som += j
            }
        }
        if (som == i) {
            console.log(som)
        }
    }
}

PerfectNumbers(1, 100)