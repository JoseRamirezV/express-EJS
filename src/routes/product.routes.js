const express = require('express');
const products = require('../../products.json');

const router = express.Router();

router.get('/product/:id', (req, res) => {
   const id = req.params.id
   const product = products.find(p => p.id === id)

   res.render('product', {...product})
})

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

module.exports = router;