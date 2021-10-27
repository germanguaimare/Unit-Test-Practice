/*const sum = (a,b) => {
    return a + b
}

*/

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (z)  => {
    return Math.floor(z * (oneEuroIs.JPY/oneEuroIs.USD))
}

const fromEuroToDollar = (z) => {
    return Math.floor(z * oneEuroIs.USD)
}

const fromYenToPund = (z) => {
    return Math.floor(z * (oneEuroIs.GBP/oneEuroIs.JPY))
}


// module.exports = { sum };
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPund };