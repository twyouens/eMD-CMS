const PageModel  = require('../models/page');

function main(req, res, next) {
    res.render('pages/manage/index')
}

async function pages (req, res, next) {
    const pages = await PageModel.find().sort({ createdAt: 'desc' })
    res.render('pages/manage/pages', { pages: pages })
}

async function addPage(req, res, next) {
    try{
        const newPage = await PageModel.create(req.body)
        res.redirect(`pages/${newPage.id}`)
    } catch(error){
        console.error("Error when trying to create page",error.message)
        res.redirect('pages/new')
    }
}

async function newPage(req, res, next) {
    res.render('pages/manage/newPage')
}

async function editPage(req, res, next) {
    const page = await PageModel.findById(req.params.id)
    if (page == null) res.redirect('/manage/pages')
    res.json(page)
}


module.exports = {
    main,
    pages,
    newPage,
    addPage,
    editPage
}