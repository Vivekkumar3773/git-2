const express = require('express');

const products = express.Router();

products.get('/', (req, res, next) => {
    res.render('product-list', { pageTitle: 'Product-Page', path: '/' });
})

module.exports = products;