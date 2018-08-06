const logger = require("./logger");
const adder = require("./adder");

logger("sup");
logger(adder(1, 3));
