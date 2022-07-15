const catelogDAO = require("../DAO/catelogDAO");
const mongoose = require("mongoose");

exports.createCatelog = async (req) => {
  let catalogData = {
    sellerId: mongoose.Types.ObjectId(req.sellerId),
    product_name: req.product_name,
    price: req.price,
  };
  try {
    return await catelogDAO.saveCatelog(catalogData);
  } catch (err) {
    console.log(err);
    throw err;
  }
};


exports.getCatelogBySeller = async (sellerId) => {
    try {
      return await catelogDAO.getCatelogBySeller(sellerId);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  