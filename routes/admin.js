var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();

 
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/view-products',{admin:true})
});

router.get('/add-products',(req,res, next)=>{
  res.render('admin/add-products',{admin:true})
})
router.post('/add-products',(req,res, next)=>{

  productHelpers.addProduct(req.body,(result)=>{

    res.render('admin/add-products')
  
  })
 


})

module.exports = router;
