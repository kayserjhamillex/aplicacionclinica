const express = require('express');
const router = express.Router();
const doctorCtrl = require('../controllers/doctor.controller');

/* GET home page. */
router.get('/', doctorCtrl.list);
router.get('/:id', doctorCtrl.get);
router.post('/create', doctorCtrl.create);
router.put('/update/:id', doctorCtrl.update);
router.delete('/:id', doctorCtrl.remove);

//filtro de los doctores por especialidad
// router.get('/filtro/:doct', doctorCtrl.filterlistt);

module.exports = router;
