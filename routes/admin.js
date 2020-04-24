const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();
//const products = [];

// /admin/add-product 
router.get('/add-product', adminController.getAddProductPage);

//admin/admin-products
router.get('/admin-products', adminController.getProducts);

router.post('/add-product', adminController.postAddProducts);


module.exports = router;
//exports.router = router;
//exports.products = products;