const landingRoutes = require('./routes/landing.routes');
const productRoutes = require('./routes/product.routes');
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', productRoutes);
app.use('/', landingRoutes);

module.exports = app;
