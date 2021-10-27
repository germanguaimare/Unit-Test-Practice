/* const { sum } = require ('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum (14,9);
    expect(total).toBe(23);
})

*/

const { fromDollarToYen, fromEuroToDollar, fromYenToPund } = require ('./app.js');

test('One dollar to Yen equals 106', () => {
    let conversion = fromDollarToYen (1);
    expect(conversion).toBe(106);

})

test('5 Euros to Dollars equals 6', () => {
    let conversion = fromEuroToDollar (5);
    expect(conversion).toBe(6);

})

test('1000 Yen to Pounds equals 6', () => {
    let conversion = fromYenToPund (1000);
    expect(conversion).toBe(6);

})