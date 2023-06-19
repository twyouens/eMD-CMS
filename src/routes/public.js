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

module.exports = router;