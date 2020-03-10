const express = require('express');
const router = express.Router();
const especialidadCtrl = require('../controllers/especialidad.controller');

/* GET home page. */
router.get('/', especialidadCtrl.list);
router.get('/:id', especialidadCtrl.get);
router.post('/create', especialidadCtrl.create);
router.put('/update/:id', especialidadCtrl.update);
router.delete('/:id', especialidadCtrl.remove);

module.exports = router;
