let express = require("express");
let router = express.Router();

const { getOneData, getAllData, excel, paginatePage } = require("./controller");

router.get("/", getAllData);
router.get("/getonedata", getOneData);
router.post("/getonedata", paginatePage);
router.get("/excel", excel);

module.exports = router;
