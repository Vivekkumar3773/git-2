const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { pageTitle: 'Add-Product Page', path: '/add-product' });
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const products = new Product(title, imageUrl, price, description);
    products.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fatchAll((products) => {
        res.render('admin/products', { pageTitle: 'Admin-Section Page', path: '/products', prods: products });
    })
}