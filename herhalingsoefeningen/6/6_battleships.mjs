function maakSpeelveld() {
    let speelveld = []
    for (let i = 1; i <= 10; i++) {
        let array = []
        for (let j = 1; j <= 10; j++) {
            array.push("0")
        }
        speelveld.push(array)
    }
    return speelveld
}


function boat(speelveld,length, direction, x, y) {
    if (direction == "up") {
        if (y-(length-1) >= 0 && y <= 9 && x >= 0 && x <= 9) {
            for (let i = 0; i < length; i++) {
                speelveld[y-i][x] = "B"
            }
        } else {console.log("Your boat got lost; Choose the correct coordinates")}
    }
    else if (direction == "down") {
        if (y >= 0 && y + (length - 1) <= 9 && x >= 0 && x <= 9) {
            for (let i = 0; i < length; i++) {
                speelveld[y+i][x] = "B"
            }
        } else {console.log("Your boat got lost; Choose the correct coordinates")}
    }
    else if (direction == "left") {
        if (y <= 9 && y >= 0 && x - (length - 1) >= 0 && x <= 9) {
            for (let i = 0; i < length; i++) {
                speelveld[y][x-i] = "B"
            }
        } else {console.log("Your boat got lost; Choose the correct coordinates")}
    }
    else if (direction == "right") {
        if (y <= 9 && y >= 0 && x >= 0 && x + (length -1) <= 9) {
            for (let i = 0; i < length; i++) {
                speelveld[y][x+i] = "B"
            }
        } else {console.log("Your boat got lost; Choose the correct coordinates")}
    }
    else {console.log("Your boat got lost; Choose a direction")}
    return speelveld
}

function shoot(speelveld,x,y) {
    if (speelveld[y][x] == "B") {
        speelveld[y][x] = "*"
    } else {
        speelveld[y][x] = "^"
    }
    console.table(speelveld)
    return speelveld
}

/* async function Battleships(speler1, speler2) {
    let speelveld1 = maakSpeelveld()
    let speelveld2 = maakSpeelveld()
    let x
    let y
    let direction
    console.log(speler1 + " mag eerst zijn boten plaatsen")
    console.log("Grootste boot van 5 lang")
    direction = await userInput.question("Welke richting gaat je boot?")
    x = parseFloat(await userInput.question("Wat is de start x-coordinaat"))
    y = parseFloat(await userInput.question("Wat is de start y-coordinaat"))
    speelveld1 = boat(speelveld1,5,x,y)
    console.log(speler2 + " mag eerst zijn boten plaatsen")
    console.log("Grootste boot van 5 lang")
    direction = await userInput.question("Welke richting gaat je boot?")
    x = parseFloat(await userInput.question("Wat is de start x-coordinaat"))
    y = parseFloat(await userInput.question("Wat is de start y-coordinaat"))
    speelveld2 = boat(speelveld2,5,x,y) 

} */

    