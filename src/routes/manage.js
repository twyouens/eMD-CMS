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

// POST new page
router.post('/pages', manageController.addPage)

// GET new page
router.get('/pages/new', manageController.newPage)

// GET edit page
router.get('/pages/:id', manageController.editPage)

module.exports = router;