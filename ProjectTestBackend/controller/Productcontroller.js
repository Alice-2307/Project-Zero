const product = require("../models/product");

exports.postProductDetail = async (req, res, next) => {
  const SP = req.body.SellingPrice;
  const PM = req.body.ProductName;
  try {
    let result = await product.create({
      SellingPrice: SP,
      ProductName: PM,
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
  const prodid = req.params.id;
  console.log(prodid);
  try {
    let result = await product.findByPk(prodid)
    result.destroy()
    console.log("Delete Successfully")
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "An error occurred" });
  }
};
