const Product = require('../models/product');

exports.getAddProductPage = 
    (req, res) => {
    res.render('admin/add-product', {
        pageTitle: "Add New Product",
        path: "/admin/add-product"
    });
}

exports.postAddProducts = (req, res) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    
    const product = new Product(title, imageUrl, description, price);
    product.saveProduct();
    res.redirect('/');
}

exports.getProducts = (req, res) => {
    Product.fetchAllProducts((products)=>{
        res.render('admin/admin-products', {
        pageTitle: 'Admin Products',
        products: products,
        path: '/admin/admin-products'
        });
    }) 
}