const express = require('express');
const specialOffers = require('../../specialOffers.json');

const router = express.Router();

router.get('/', (req, res) => {
   res.render('home', { title: 'Página de Inicio', specialOffers });
});

module.exports = router;
