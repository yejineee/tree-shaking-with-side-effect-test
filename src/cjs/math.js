module.exports = function add() {
    console.log('더하기')
    var sum = 0, i = 0, args = arguments, l = args.length;
    while (i < l) {
        sum += args[i++];
    }
    return sum;
}

module.exports = function multiply() {
    console.log('곱하기')
    var product = 1, i = 0, args = arguments, l = args.length;
    while (i < l) {
        product *= args[i++];
    }
    return product;
}

module.exports = function list() {
    console.log('리스트')
    return Array.from(arguments);
}