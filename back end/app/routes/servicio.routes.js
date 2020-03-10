const express = require('express');
const router = express.Router();
const servicioCtrl = require('../controllers/servicio.controller');

/* GET home page. */
router.get('/', servicioCtrl.list);
router.get('/:id', servicioCtrl.get);
router.post('/create', servicioCtrl.create);
router.put('/update/:id', servicioCtrl.update);
router.delete('/:id', servicioCtrl.remove);

module.exports = router;
