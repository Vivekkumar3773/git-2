const express = require('express');

const products = express.Router();

products.get('/', (req, res, next) => {
    res.render('product-list', { pageTitle: 'Product-Page', path: '/', prods: products });
})

module.exports = products;