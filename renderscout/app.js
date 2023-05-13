const express = require("express")
const parser = require("body-parser")
const compression = require("compression")()
const router = require("./routes/router")
const errorHandler = require("./middleware/errorHandler")


// create app and add features
const app = express()
app.use(parser.json())
app.use(compression)
app.use("/", router)
app.use(errorHandler)


// listening
app.listen(3000, () => {
	console.log("server listening on 3000..")
})