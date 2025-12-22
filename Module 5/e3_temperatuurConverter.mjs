function tempConverter (temperatuur, isCelsius) {
    let convertedTemp
    if (isCelsius == true) {
        convertedTemp = 32 + (temperatuur *9/5)
    } else {
        convertedTemp = (temperatuur - 32) * 5/9
    }
    console.log(convertedTemp)
}

tempConverter(68,false)