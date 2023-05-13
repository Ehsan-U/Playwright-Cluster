const handleError = async (err, req, resp, next) => {
    console.log(err)
    resp.status(400).json({error: err})
}

module.exports = handleError