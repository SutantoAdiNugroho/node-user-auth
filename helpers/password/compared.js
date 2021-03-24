const bcrypt = require("bcrypt");

//Komparasi password, bernilai true atau false
const comparedPassword = async (plainPassword, hashPassword) => {
  const compared = await bcrypt
    .compare(plainPassword, hashPassword)
    .then((result) => {
      return result;
    });
  return compared;
};

module.exports = comparedPassword;
