let winkellijst = []

function voegItemToe (lijst, item) {
    lijst.push(item)
    return lijst
}

function toonLijst (lijst) {
    if (lijst.length == 0) {console.log("Momenteel is mijn lijst leeg")}
    else {
        console.log("Er staat het volgende op mijn lijst:")
        for (let i = 0; i < lijst.length; i++) {
        console.log("- " + lijst[i])
        }
    }  
}

function maakLijstLeeg (lijst) {
    lijst = []
    return lijst
}

winkellijst = voegItemToe(winkellijst, "banaan")
winkellijst = voegItemToe(winkellijst,"Brood")
winkellijst = voegItemToe(winkellijst,"choco")

toonLijst(winkellijst)

winkellijst = maakLijstLeeg(winkellijst)

toonLijst(winkellijst)





