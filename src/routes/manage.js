const express = require('express')
const router = express.Router()
const manageController = require('../controllers/manage')

router.use((req, res, next) => {
    next()
})

// GET all assets
router.get('/', manageController.main)

module.exports = router;