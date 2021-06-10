const router = require("express").Router();
const controller = require("./controller");

//Pendeklarasian metode http dan function yang akan dipanggil
router.post("/suggestion", controller.postSuggestion);

module.exports = router;
