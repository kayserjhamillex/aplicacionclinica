const express = require('express');
const router = express.Router();
const horarioCtrl = require('../controllers/horario.controller');

/* GET home page. */
router.get('/', horarioCtrl.list);
router.get('/:id', horarioCtrl.get);
router.post('/create', horarioCtrl.create);
router.put('/update/:id', horarioCtrl.update);
router.delete('/:id', horarioCtrl.remove);

//filtro de los horarios por la especialista
router.get('/filtro/:especialista/:dia', horarioCtrl.fitro1);
module.exports = router;
