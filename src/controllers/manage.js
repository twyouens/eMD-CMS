function main(req, res, next) {
    res.render('pages/manage/index')
}

async function pages (req, res, next) {
    const page = {
        slug: "about-us",
        title: "About Us",
        createdAt: "20/05/2023"
    }
    res.render('pages/manage/pages', { pages: [page] })
}


module.exports = {
    main,
    pages
}