const express = require('express');
const categories = require('../../categories.json');
const specialOffers = require('../../specialOffers.json');

const router = express.Router();

router.get('/', (req, res) => {
   res.render('home', { title: 'Página de Inicio', specialOffers });
});

router.get('/categories', (req, res) => {
   res.render('categories', { categories });
});

router.get('/*', (req, res) => {
   res.redirect('/');
});

module.exports = router;
