const express = require('express');

const error = express.Router();

error.use((req, res, next) => {
    res.status(404).render('404', { pageTtile: 'Error Page' });
})

module.exports = error;