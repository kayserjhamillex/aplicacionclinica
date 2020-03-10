const express = require('express');
const router = express.Router();
const pacienteCtrl = require('../controllers/paciente.controller');

/* GET home page. */
router.get('/', pacienteCtrl.list);
router.get('/:id', pacienteCtrl.get);
router.post('/create', pacienteCtrl.create);
router.put('/update/:id', pacienteCtrl.update);
router.delete('/:id', pacienteCtrl.remove);

//parte para los filtros
router.get('/searchcorreo/:correo', pacienteCtrl.searchcorreo);
router.get('/searchdoc/:numero', pacienteCtrl.searchdoc);
router.get('/login/:user/:contra', pacienteCtrl.login);

module.exports = router;
