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
const sequelize = require('./database/index');
const app = express();
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// routes registering
app.use('/admin', adminRoutes);
app.use('/admin/products', adminProductRoutes);
app.use('/products', productRoutes);
app.use('/', pageRoutes);

// Database Sync & App start
sequelize.sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(error => {
        console.log(error)
    })
;