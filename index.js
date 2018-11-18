// external libraries imports

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv').config();

// routes imports
const adminRoutes = require('./routes/admin');
const adminProductRoutes = require('./routes/admin/product')
const productRoutes = require('./routes/product');
const pageRoutes = require('./routes/page');

// global use
const app = express();
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// routes registering
app.use('/admin', adminRoutes);
app.use('/admin/products', adminProductRoutes);
app.use('/products', productRoutes);
app.use('/', pageRoutes);

// run app
app.listen(3000);