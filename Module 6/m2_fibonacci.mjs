let fibonacci = [0, 1]

for (let i = 0; fibonacci.length < 10; i++) {
           fibonacci.push(fibonacci[0+i] + fibonacci[1+i])
}
console.log(fibonacci.length)
console.log(fibonacci)