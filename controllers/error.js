exports.useError = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Error Page', path: '/404' });
}