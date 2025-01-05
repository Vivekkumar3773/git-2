const Product = require('../model/product');

exports.getProducts = (req, res, next) => {
    Product.fatchAll((products) => {
        res.render('shop/product-list', { pageTitle: 'Shop Page', path: '/', prods: products });
    })
}

exports.getIndex = (req, res, next) => {
    Product.fatchAll((products) => {
        res.render('shop/index', { pageTitle: 'All Product Page', path: '/index', prods: products });
    })
}

exports.getIndexs = (req, res, next) => {
    const prodId = req.params.productId;
    res.render('shop/index', { pageTitle: 'Cart Page', path: '/index' });
    res.redirect('/');
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', { pageTitle: 'Cart Page', path: '/cart' });
}

exports.getOrder = (req, res, next) => {
    res.render('shop/order', { pageTitle: 'Order Page', path: '/order' });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { pageTitle: 'Checkout Page', path: '/checkout' });
}
