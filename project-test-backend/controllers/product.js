const product = require("../models/products");

exports.postProductDetail = async (req, res, next) => {
  const SP = req.body.sellingPrice;
  const PM = req.body.productName;
  try {
    let result = await product.create({
      sellingPrice: SP,
      name: PM,
    })
    console.log("Product Create Successfully");
    res.status(201).json({ ProductData: result });

  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "An error occurred" });
  }
};

exports.getProductDetail = async (req, res, next) => {
  try {
    let result = await product.findAll()
    console.log("Get All Product Successfully");
    res.status(200).json({ getAllProductData: result });

  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "An error occurred" });
  }
};

exports.deleteProductDetail = async (req, res, next) => {
  const prodId = req.params.id;
  console.log(prodId);
  try {
    let result = await product.findByPk(prodId)
    result.destroy()
    console.log("Delete Successfully")
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "An error occurred" });
  }
};
