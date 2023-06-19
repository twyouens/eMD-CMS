function home(req, res, next) {
    res.send("Home")
}

function page(req, res, next) {
    res.send("Post")
}

module.exports = {
    home,
    page
}