const router = require("express").Router();
const controller = require("./controller");

//Pendeklarasian metode http dan function yang akan dipanggil
router.get("/users", controller.getAllUser);
router.get("/user/:id", controller.getOneUser);
router.put("/modify/user/:id", controller.updateOneUser);

module.exports = router;
