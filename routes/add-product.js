const express = require('express');

const bodyParser = require('body-parser');

const addProduct = express.Router();

addProduct.use(bodyParser.urlencoded({ extended: false }));

addProduct.get('/add-product', (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add-Product Page', path: '/add-product' });
})

addProduct.post('/add-product', (req, res, next) => {
    res.redirect('/');
})

module.exports = addProduct;