let scores = [3, 4, 5, 6]
let gemiddelde = 0

for (let i = 0; i < scores.length; i++) {
    gemiddelde += scores[i]
}
gemiddelde = gemiddelde/scores.length
console.log(gemiddelde)