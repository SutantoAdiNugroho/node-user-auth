require("dotenv").config();

//Menginisialisasi value dari .env, sehingga bisa dipanggil ke bagian lain dengan mudah
module.exports = {
  PORT: process.env.PORT,
  HOST_DB: process.env.HOST_DB,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};
