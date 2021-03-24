const { JWT_SECRET_KEY } = require("../../config");
const Jwt = require("jsonwebtoken");

//Generate token JWT pada saat proses login
const generateToken = async (user) => {
  const { _id, name, email } = user;
  const token = Jwt.sign({ _id, name, email }, JWT_SECRET_KEY, {
    expiresIn: "24h",
  });

  return token;
};

module.exports = generateToken;
