const router = require("express").Router();
const controller = require("./controller");

router.post("/users/register", controller.registerUser);
router.post("/users/login", controller.loginUser);

module.exports = router;
