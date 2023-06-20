const authentication = require('../middleware/auth')
const UserModel = require('../models/user')
var crypto = require('crypto');

function home(req, res, next) {
    res.send("Home")
}

function page(req, res, next) {
    res.send("Post")
}

function signIn(req, res, next) {
    res.render("pages/public/signin")
}

async function registerUser(req, res, next){
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(req.body.password, salt, 10000, 512, 'sha512').toString('hex');
    try{
        newUser = await UserModel.create({username: req.body.username,name: req.body.name, hash: hash, salt: salt})
        console.log(newUser)
        res.redirect('/sign-in')
    }catch(error){
        res.send("Error")
        console.error(error.message)
    }
}

async function logout(req, res, next) {
    res.clearCookie('jwt');
    res.redirect('/'); // Redirect to the desired page after logout
}


signInPost = [
    authentication.authenticate,
    (req, res) => {
        // Redirect or respond with success message
        res.redirect('/manage');
    },
];

module.exports = {
    home,
    page,
    signIn,
    signInPost,
    logout,
    registerUser
}