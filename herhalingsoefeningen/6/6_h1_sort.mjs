let lijst = [50,36,5,4,2,6,5654,5966,2315,235,584,6985,29668,5,7,4]



function sort(array) {
    let maximum 
    let index
    let sortedArray = []
    let lengte = array.length
    while (sortedArray.length != lengte) {
        maximum = array[0]
        index = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maximum) {
                maximum = array[i]
                index = i
            }
        }
        sortedArray.push(maximum)
        let legeArray = []
        for (let i = 0; i < array.length; i++) {
            if (i != index) {legeArray.push(array[i])} 
        }
        array = legeArray
    }
    console.log(sortedArray)
}

sort(lijst)