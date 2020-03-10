const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blog.controller');

/* GET home page. */
router.get('/', blogCtrl.list);
router.get('/:id', blogCtrl.get);
router.post('/create', blogCtrl.create);
router.put('/update/:id', blogCtrl.update);
router.delete('/:id', blogCtrl.remove);

module.exports = router;
