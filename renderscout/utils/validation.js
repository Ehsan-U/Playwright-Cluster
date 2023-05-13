const { URL } = require("url")


function is_valid(url) {
    try {
        new URL(url)
        return true
    }
    catch(error) {
        // console.log(error)
        return false
    }
}


module.exports = {is_valid}