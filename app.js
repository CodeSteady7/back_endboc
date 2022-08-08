require("dotenv").config()
const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const logger = require("morgan")
const cors = require("cors")

const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")
const fromRouter = require("./routes/form")

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))

app.set("view engine", "ejs")

// app.use(
// 	cors({
// 		origin: "*",
// 		credentials: true,
// 	})
// )

const corsOptions = {
	origin: true, //included origin as true
	credentials: true, //included credentials as true
}

app.use(cors(corsOptions))

app.use(function (req, res, next) {
	res.header(
		"Access-Control-Allow-Origin",
		"http://localhost:3001",
		"http://localhost:3000",
		"http://10.251.148.37:3000",
		"http://192.168.69.9:3000"
	)

	// res.header("Access-Control-Allow-Origin", "http://10.251.148.45:3000")
	// res.header("Access-Control-Allow-Origin", true)
	res.header("Access-Control-Allow-Credentials", true)
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	)
	res.header(
		"Access-Control-Allow-Headers",
		"x-access-token, Origin, X-Requested-With, Content-Type, Accept"
	)
	next()
})
app.use(logger("dev"))
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "src")))
// middleware
app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/form", fromRouter)

// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", req.headers.origin)
// 	res.header(
// 		"Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept"
// 	)
// 	next()
// })

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get("env") === "development" ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render("error")
})

module.exports = app

// # APP_NAME=pgpag_db

// # DB_USERNAME=aqilatec_root
// # DB_PASSWORD='Wisuda_2022%t'
// # DB_HOSTNAME='localhost'
// # DB_NAME=pgpag_db
// # DB_DIALECT=mysql
