const express = require('express');
const router = express.Router();
const vendedorController = require('../controllers/vendedorController');

router.get('/list/masventas', vendedorController);
router.get('/list/masdinero', vendedorController);
router.get('/list/masvendido/auto', vendedorController);
router.get('/list/masvendido/marca', vendedorController);


module.exports = router;