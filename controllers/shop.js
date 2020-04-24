const Product = require('../models/product');

//get shop page
exports.getProducts = (req, res) => {
    Product.fetchAllProducts((products)=>{
        res.render('shop/product-list', {
        pageTitle: 'Welcome to My Shop!',
        products: products,
        path: '/products'
        });
    })
    
   // res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
};

exports.getProduct = (req, res) => {
    const productID = req.params.productID;
    //console.log(productID);
    //res.redirect('/');

    Product.findById(productID, product =>{
        console.log(product);
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title,
            path: '/products'
        });
    });
};

exports.postCart = (req, res) =>{
    //adding a product to the cart
    const productID = req.body.productID;
    console.log(productID);
    res.redirect('/cart');
}

//get index page
exports.getIndex = (req, res) => {
    Product.fetchAllProducts((products)=>{
        res.render('shop/index', {
        pageTitle: 'All Products',
        products: products,
        path: '/'
        });
    });
};

exports.getCart = (req, res) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });     
}

exports.getOrders = (req, res) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    }); 
}

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}