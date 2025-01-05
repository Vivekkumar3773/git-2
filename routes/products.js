const express = require('express');

const shopController = require('../controllers/shop');

const products = express.Router();

products.get('/', shopController.getProducts);

products.get('/index', shopController.getIndex);

products.get('/index/:productId', shopController.getIndexs);

products.get('/cart', shopController.getCart);

products.get('/order', shopController.getOrder);

products.get('/checkout', shopController.getCheckout);

module.exports = products;