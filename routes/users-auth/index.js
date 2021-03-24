const router = require("express").Router();
const controller = require("./controller");

//Pendeklarasian metode http dan function yang akan dipanggil
router.post("/users/register", controller.registerUser);
router.post("/users/login", controller.loginUser);

module.exports = router;
