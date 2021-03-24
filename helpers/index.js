const hashPassword = require("./password/hash");
const comparedPassword = require("./password/compared");
const generateToken = require("./token/token");

module.exports = {
  hashPassword,
  comparedPassword,
  generateToken,
};
