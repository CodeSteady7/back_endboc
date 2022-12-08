let express = require("express");
let router = express.Router();

const { index } = require("./controller");

router.get("/", index);

module.exports = router;
