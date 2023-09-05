const express = require("express");

const productController = require("../controllers/product");

const router = express.Router();

router.post("/products", productController.postProductDetail);

router.get("/products", productController.getProductDetail);

router.delete("/products/:id", productController.deleteProductDetail);

module.exports = router;
