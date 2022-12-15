let express = require("express");
let router = express.Router();

const { index, actionDateRange, getIndexDate } = require("./controller");

router.get("/", index);
router.get("/date", getIndexDate);
router.post("/", actionDateRange);

module.exports = router;
