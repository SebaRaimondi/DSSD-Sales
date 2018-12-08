const express = require('express');
const router = express.Router();

const saleController = require('../controllers').sale;

router.get('/', function (req, res) {
    res.render('index', {title: 'SalesAPI'});
});

router.get('/api/sale', saleController.list);
router.get('/api/sale/:id', saleController.getById);
router.post('/api/sale', saleController.add);
router.put('/api/sale/:id', saleController.update);
router.delete('/api/sale/:id', saleController.delete);

module.exports = router;
