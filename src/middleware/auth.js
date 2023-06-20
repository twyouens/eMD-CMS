const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function authenticate(req, res, next) {
    const { username, password } = req.body;
  
    try{
        // Find the user by username
        const findUser = await User.findOne({ username: username });
        if (!findUser || !findUser.validPassword(password)) {
            return res.render('pages/public/signin')
        }
    
        // Generate JWT
        const token = findUser.generateJWT();
    
        // Set the JWT as a cookie
        res.cookie('jwt', token, { httpOnly: true });
    
        next();
    }catch(error){
        console.error(error.message)
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    
};

async function checkAuth(req, res, next) {
    const token = req.cookies.jwt;
  
    if (!token) {
        return res.redirect('/sign-in')
    }
  
    // Verify JWT
    jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
        if (err) {
            return res.redirect('/sign-in')
        }
    
        req.user = decoded; // Add the user object to the request
    
        next();
    });
};

module.exports = {
    authenticate,
    checkAuth
}

