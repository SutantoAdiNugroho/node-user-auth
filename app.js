const express = require("express");
const jwt = require("express-jwt");
const bodyParser = require("body-parser");
const { PORT, connectDB } = require("./config");

const app = express();

//Handling HTTP requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes"));

//App akan berjalan pada port yang telah diatur di .env
if (connectDB) {
  app.listen(PORT, () => {
    console.log(`This app running on port ${PORT}`);
  });
}
