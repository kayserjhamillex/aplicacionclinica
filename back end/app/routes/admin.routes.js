const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin.controller');

/* GET home page. */
router.get('/', adminCtrl.list);
router.get('/:id', adminCtrl.get);
router.post('/create', adminCtrl.create);
router.put('/update/:id', adminCtrl.update);
router.delete('/:id', adminCtrl.remove);

module.exports = router;
