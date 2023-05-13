const express = require("express")
const router = express.Router()
const index = require("../index")


router.post("/", async (req, resp, next) => {
    try {
        response = await index.process_request(req)
        resp.send(response)
        // console.log("processed: "+req.url)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router