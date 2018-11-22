// external libraries imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')

// internal imports

// routes imports
// const adminRoutes = require('./routes/admin');
// const adminProductRoutes = require('./routes/admin/product')
// const productRoutes = require('./routes/product');
// const cartRoutes = require('./routes/cart')
// const pageRoutes = require('./routes/page');

// global use
const app = express();
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// routes registering
// app.use('/admin', adminRoutes);
// app.use('/admin/products', adminProductRoutes);
// app.use('/products', productRoutes);
// app.use('/cart', cartRoutes);
// app.use('/', pageRoutes);

mongoose.connect(`mongodb+srv://dancondo:${process.env.MONGO_DB_PASSWORD}@nodepractice-ynq4j.mongodb.net/test?retryWrites=true`)
    .then(reponse => {
        app.listen(3000);
    })
    .catch(error => {
        console.log(error);
    })
;