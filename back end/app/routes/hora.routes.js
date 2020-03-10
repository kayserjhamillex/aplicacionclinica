const express = require('express');
const router = express.Router();
const horaCtrl = require('../controllers/hora.controller');

/* GET home page. */
router.get('/', horaCtrl.list);
router.get('/:id', horaCtrl.get);
router.post('/create', horaCtrl.create);
router.put('/update/:id', horaCtrl.update);
router.delete('/:id', horaCtrl.remove);

module.exports = router;
