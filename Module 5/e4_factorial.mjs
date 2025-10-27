function factorial (getal) {
    if (getal < 1) {
        console.error()
    } else {
        let factorial = 1
        for (let i = 1; i <= getal; i++) {
            factorial = factorial * i}    
        console.log(factorial)
    }
}

factorial(0)