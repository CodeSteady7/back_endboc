let express = require("express");
let router = express.Router();
const multer = require("multer");
const os = require("os");

const {
  index,
  indexDetail,
  actionDelete,
  onNotAccept,
  actionCreateHistoryReport,
} = require("./controller");

router.get("/", index);
router.get("/:id", indexDetail);
// router.put("/:id", onNotAccept);
router.post(
  "/:id",
  multer({ dest: os.tmpdir() }).single("image"),
  actionCreateHistoryReport
);
router.post("/:id", actionDelete);

module.exports = router;
