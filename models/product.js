//working with files
//fs - file system;

//IMPORTANT! In regular functions the 'this' keyword represented the object that called the function, which could be the window, the document, a button or whatever.
//IMPORTANT! With arrow functions the this keyword always represents the object that defined the arrow function.
//https://www.w3schools.com/js/js_arrow_function.asp

const fs = require('fs');
const path = require('path');

//to avoid repetition of the same chunk of code, dataPath is now a golbal variable
const dataPath = path.join(path.dirname(process.mainModule.filename),
    'data',
    'product.json'        
    );

//code refactoring 
//let's create a helper function to read the content of the file
const getProductsFromFile = (callBack) => {
    fs.readFile(dataPath, (error, fileContent) => {
        //in case of  error while opening the file
        if(error){
            return callBack([]);
        }
        callBack(JSON.parse(fileContent));
    });
}

//Model itself
module.exports = class Product {
    constructor(bookTitle, imageUrl, description, price){
        this.title = bookTitle;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    saveProduct() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            //saving products array in json format to the file
            fs.writeFile(dataPath, JSON.stringify(products), (error) => {
                console.log(error);
            });
        });
       
    }
    //to read the products.json file content
    static fetchAllProducts(callBack){
        getProductsFromFile(callBack);
    }

    static findById(id, callBack){
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            callBack(product);
        });
    }
}