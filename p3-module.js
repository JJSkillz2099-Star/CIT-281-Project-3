function validDenomination(coin) {
    let coins = [1, 5, 10, 25, 50, 100];
    return coins.indexOf(coin) >=0;
}
console.log(validDenomination(1));

function valueFromCoinObject(obj) {
    const { denom = 0, count = 0 } = obj;
    return denom * count;
}
console.log(valueFromCoinObject({ denom: 50, count: 2 }));

const coins = [
    { denom: 10, count: 4 },
    { denom: 5, count: 3 },
];

function valueFromArray(arr) {
    return arr.reduce((coinValue, coinObj) => coinValue + valueFromCoinObject(coinObj), 0);
}
console.log(valueFromArray(coins));

function coinCount(...coinage) {
    return valueFromArray(coinage);
}
console.log(coinCount(...coins));
module.exports = { coinCount };
