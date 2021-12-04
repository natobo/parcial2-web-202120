var express = require('express');
var router = express.Router();
const productController = require('../controllers/product');

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  var query = req.query.q;
  const response =  productController.getProducts(query);
  res.send(response);  
});

module.exports = router;
