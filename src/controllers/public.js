function home(req, res, next) {
    res.send("Home")
}

function page(req, res, next) {
    res.send("Post")
}

function signIn(req, res, next) {
    res.render("pages/public/signin")
}

module.exports = {
    home,
    page,
    signIn
}