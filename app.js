const express = require('express');

const addProductRoutes = require('./routes/add-product');
const productRoutes = require('./routes/products');
const errorRoutes = require('./routes/404');

const app = express();

app.use(addProductRoutes);
app.use(productRoutes);
app.use(errorRoutes);

app.listen(7000);