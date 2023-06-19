const express = require('express')
const router = express.Router()
const manageController = require('../controllers/manage')

router.use((req, res, next) => {
    next()
})

// main dashboard
router.get('/', manageController.main)

// GET pages
router.get('/pages', manageController.pages)

module.exports = router;