const express = require('express');

const bodyParser = require('body-parser');

const adminControllers = require('../controllers/admin');

const addProduct = express.Router();

addProduct.use(bodyParser.urlencoded({ extended: false }));

addProduct.get('/add-product', adminControllers.getAddProduct);

addProduct.get('/products', adminControllers.getProducts);

addProduct.post('/add-product', adminControllers.postAddProduct);

module.exports = addProduct;