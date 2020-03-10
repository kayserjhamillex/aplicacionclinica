const express = require('express');
const router = express.Router();
const especialistaCtrl = require('../controllers/especialista.controller');

/* GET home page. */
router.get('/', especialistaCtrl.list);
router.get('/:id', especialistaCtrl.get);
router.post('/create', especialistaCtrl.create);
router.put('/update/:id', especialistaCtrl.update);
router.delete('/:id', especialistaCtrl.remove);

//los filtros para facilitar las cosas :v
router.get('/filtro1/:idespe',especialistaCtrl.fitro1);
router.get('/filtro2/:doc/:idespe',especialistaCtrl.fitro2);

module.exports = router;
