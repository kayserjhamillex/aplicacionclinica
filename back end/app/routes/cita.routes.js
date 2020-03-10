const express = require('express');
const router = express.Router();
const citaCtrl = require('../controllers/cita.controller');

/* GET home page. */
router.get('/', citaCtrl.list);
router.get('/:id', citaCtrl.get);
router.post('/create', citaCtrl.create);
router.put('/update/:id', citaCtrl.update);
router.delete('/:id', citaCtrl.remove);

module.exports = router;
