let restaurant = {naam: "Bavet", keuken: "italiaans", menu: [{naam:"Spaghetti bolognaise", prijs: 13}, {naam:"Lasagne", prijs: 11}, {naam:"Macaroni",prijs:15}]}
console.log(restaurant)

function voegToe(naam, prijs) {
    restaurant.menu.push({naam, prijs})
}

voegToe("pizza", 15)
console.log(restaurant)
