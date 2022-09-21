const express = require('express');
const router = express.Router();
const vehiculosController = require('../controllers/vehiculosController');

router.get('/list/marca', vehiculosController.listMarca);
router.get('/list/modelo', vehiculosController);
router.get('/list/usado', vehiculosController);
router.get('/list/year/:year', vehiculosController);
router.get('/list/disponible', vehiculosController);
router.get('/list/vendidos', vehiculosController);


module.exports = router;