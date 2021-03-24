const express = require("express");
const jwt = require("express-jwt");
const bodyParser = require("body-parser");
const { PORT, connectDB, JWT_SECRET_KEY } = require("./config");

const app = express();

//Handling HTTP requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Memproteksi beberapa route kecuali authentication route
app.use(
  jwt({
    secret: JWT_SECRET_KEY,
    algorithms: ["sha1", "RS256", "HS256"],
  }).unless({
    path: [
      {
        url: "/",
        methods: ["GET"],
      },
      {
        url: "/api/auth/users/register",
        methods: ["POST"],
      },
      {
        url: "/api/auth/users/login",
        methods: ["POST"],
      },
    ],
  })
);

//Handling error response
app.use((err, req, res, next) => {
  console.log("error route", err);
  if (err.status === 401) {
    return res.status(401).json({
      status: 401,
      message: "You can't access this endpoint, token is required!",
    });
  }
  return next();
});

//Pemanggilan route
app.use("/", require("./routes"));
app.use("/api/auth", require("./routes/users-auth"));
app.use("/api/profile", require("./routes/users-biodata"));

//App akan berjalan pada port yang telah diatur di .env
if (connectDB) {
  app.listen(PORT, () => {
    console.log(`This app running on port ${PORT}`);
  });
}
