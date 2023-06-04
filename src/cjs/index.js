const { add } = require('./math');
const library = require("./library");

add(1, 2);
library.reexportedMultiply(1, 2);