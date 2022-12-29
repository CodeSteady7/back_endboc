let express = require("express");
let router = express.Router();

const { index, getIndexDate } = require("./controller");

router.get("/", index);
router.get("/date", getIndexDate);

module.exports = router;
