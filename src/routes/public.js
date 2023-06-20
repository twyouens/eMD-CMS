const express = require('express')
const router = express.Router()
const publicController = require('../controllers/public')

router.use((req, res, next) => {
    next()
})

// GET main page
router.get('/', publicController.home)

// GET page
router.get('/page/:slug', publicController.page)

// GET sign-in page
router.get('/sign-in', publicController.signIn)

// POST sign in process
router.post('/sign-in', publicController.signInPost)

router.get('/logout',publicController.logout)

module.exports = router;