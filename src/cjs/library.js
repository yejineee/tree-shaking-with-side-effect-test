const { a, b, c } = require("./abc");
const {add, multiply} = require("./math");

module.exports = {a,b,c};
module.exports.reexportedAdd = add;
module.exports.reexportedMultiply = multiply