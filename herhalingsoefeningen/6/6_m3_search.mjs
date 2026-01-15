let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"]

function namenSearch(array, naam) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == naam) {
            console.log(i+1)
            break
        } else if (i+1 == array.length) {
            console.log(-1)
        }
    }
    
}

namenSearch(namen, "Thibo")