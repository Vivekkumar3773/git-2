exports.useError = (req, res, next) => {
    res.status(404).render('404', { pageTtile: 'Error Page' });
}