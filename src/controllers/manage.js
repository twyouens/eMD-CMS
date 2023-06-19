const PageModel  = require('../models/page');

function main(req, res, next) {
    res.render('pages/manage/index')
}

async function pages (req, res, next) {
    const pages = await PageModel.find().sort({ createdAt: 'desc' })
    res.render('pages/manage/pages', { pages: pages })
}

async function addPage(req, res, next) {
    newAsset = await Asset.create(req.body)
}

async function newPage(req, res, next) {
    res.render('pages/manage/newPage')
}


module.exports = {
    main,
    pages,
    newPage,
    addPage
}