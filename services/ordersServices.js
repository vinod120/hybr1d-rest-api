const orderDAO = require("../DAO/ordersDAO");
const mongoose = require("mongoose");

exports.createOrder = async (req) => {
  let orderDetails = {
    productId: mongoose.Types.ObjectId(req.productId),
    buyerId: mongoose.Types.ObjectId(req.buyerId),
    quantity: req.quantity,
  };
  try {
    return await orderDAO.saveOrder(orderDetails);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
