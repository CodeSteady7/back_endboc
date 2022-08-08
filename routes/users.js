const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/userCtrl")
const form1Ctrl = require("../controllers/form1Ctrl")
const reportCtrl = require("../controllers/report")
const multer = require("multer")
const storage = multer.diskStorage({})
const fileFilter = (req, file, cb) => {
	if (file.mimetype.startsWith("image/jpeg")) {
		cb(null, true)
	} else {
		cb("invalid image file!", false)
	}
}
const uploads = multer({ storage, fileFilter })

const upload = multer({ dest: "./public/data/uploads/" })
const auth = require("../middleware/auth")
const os = require("os")

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource")
})
router.put("/updateform1/:id", form1Ctrl.updateForm01)

// Endpoint User
router.post("/newakun", userCtrl.newAkun)
router.post("/login", userCtrl.login)
router.post("/logout", userCtrl.logout)

// router.get("/refresh_token",(req, res) => {
// 	try {
// 		const rf_token = req.cookies.refreshtoken
// 		console.log("refresh token => ", rf_token)
// 		if (!rf_token) return res.status(400).json({ msg: "Please login or Register" })

// 		jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
// 			if (err) return res.status(400).json({ msg: "Please login verify" })

// 			const accesstoken = createAcceessToken({ id: user.id })

// 			res.json({ user, accesstoken, rf_token })
// 		})
// 	} catch (err) {
// 		return res.status(500).json({ msg: err.message })
// 	}
// },)

router.get("/refresh_token", userCtrl.refreshToken)
router.get("/infor", auth, userCtrl.getUser)

router.get("/getdatetime", userCtrl.datetimesTbl)

router.put("/userupdate/:id", userCtrl.updateUser)

// router.get('/tbl_view')
// report
router.post("/report", reportCtrl.getReport)

router.post(
	"/img",
	// multer({ dest: os.tmpdir() }).single("file"),
	uploads.single("file"),
	reportCtrl.img
	// reportCtrl.getReport
)
// images

// router.post("/img", upload.single("file"), reportCtrl.img)
router.get("/getimg", reportCtrl.getImg)
module.exports = router
