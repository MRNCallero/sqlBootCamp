const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController');

router.get('/list/:anio', ventasController.anio);
router.get('/list/:mes', ventasController);
router.get('/list/masvendido/auto', ventasController);
router.get('/list/masvendido/marca', ventasController);


module.exports = router;