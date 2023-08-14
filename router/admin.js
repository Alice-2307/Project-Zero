const express = require('express');

const router = express.Router();

router.get('/add-product', (req,res, next) => {
    res.send('<form action="/admin/add-product" method="POST">Title:- <input type="text" name="title"><br><br>Size:- <input type="number" name="size"><br><br><button type="submit">Add Product</button></form>');
    
});
router.post('/add-product', (req,res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;