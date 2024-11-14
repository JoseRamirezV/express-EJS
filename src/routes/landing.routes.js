const categories = require('../../categories.json');
const products = require('../../products.json');
const express = require('express');
const specialOffers = require('../../specialOffers.json');

const router = express.Router();

router.get('/', (req, res) => {
   res.render('home', { title: 'Página de Inicio', specialOffers });
});

router.get('/categories', (req, res) => {
   res.render('categories', { categories });
});

router.get('/consoles', (req, res) => {
   const filteredProducts = products.filter(
      (product) => product.category === 'console'
   );
   res.render('brochure', { category: 'Consolas', filteredProducts });
});

router.get('/laptops', (req, res) => {
   const filteredProducts = products.filter(
      (product) => product.category === 'laptop'
   );
   res.render('brochure', { category: 'Laptops', filteredProducts });
});

router.get('/peripherals', (req, res) => {
   const filteredProducts = products.filter(
      (product) => product.category === 'peripheral'
   );
   res.render('brochure', { category: 'Periféricos', filteredProducts });
});

router.get('/*', (req, res) => {
   res.redirect('/');
});

module.exports = router;
