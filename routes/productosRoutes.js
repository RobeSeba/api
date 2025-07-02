const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController.js');

router.get('/', productosController.consultar);
router.post('/', productosController.agregar);

router.route('/id')
    .get(productosController.consultarDetalle)
    .put(productosController.actualizar)
    .delete(productosController.eliminar);

module.exports = router;    