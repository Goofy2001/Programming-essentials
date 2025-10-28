let getallenLijst = [20, 50, 70, 10, 90, 1000, 200, 698, 21, 3,15]

function Sort (array) {
    let grootsteGetal = array[0]
    let kleinsteGetal = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > grootsteGetal) {grootsteGetal = array[i]}
        if (array[i] < kleinsteGetal) {kleinsteGetal = array[i]}
    }
    let nieuweArray = []
    for (let i = grootsteGetal; i >= kleinsteGetal; i--) {
        for (let j = 0; j <= array.length; j++) {
            if (i == array[j]) {
                nieuweArray.push(array[j])
            }
        }
    }
    console.log(nieuweArray)
}

Sort(getallenLijst)