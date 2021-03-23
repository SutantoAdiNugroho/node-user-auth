const { PORT, HOST_DB, JWT_SECRET_KEY } = require("./environment");

const connectDB = require("./connection");

//Export value dari environment dan db connection status, agar dengan mudah dipanggil

module.exports = {
  //Database connection status
  connectDB: connectDB,
  //Environment value
  PORT: PORT,
  HOST_DB: HOST_DB,
  JWT_SECRET_KEY: JWT_SECRET_KEY,
};
