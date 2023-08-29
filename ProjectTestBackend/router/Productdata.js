const express = require("express");

const ProductController = require("../controller/Productcontroller");

const router = express.Router();

router.post("/addProduct", ProductController.postProductDetail);

router.get("/getProduct", ProductController.getProductDetail);

router.delete("/deleteProduct/:id", ProductController.deleteProductDetail);

module.exports = router;
