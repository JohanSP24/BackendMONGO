const express = require('express')
const router = express.Router();
const distribuidorController = require('../controllers/distribuidorController')

//estas son las rutas de nuestro crud

router.post('/',distribuidorController.agregarDistribuidores);
router.get('/',distribuidorController.buscarDistribuidores);
router.get('/:id',distribuidorController.buscarDistribuidor);
router.delete('/:id',distribuidorController.eliminarDistribuidor);
router.put('/:id',distribuidorController.actualizarDistribuidor);


module.exports = router;