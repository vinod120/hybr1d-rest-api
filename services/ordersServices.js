const orderDAO = require("../DAO/ordersDAO");
const ObjectId = require("mongoose").Types.ObjectId;

exports.createOrder = async (req) => {
  try {
    return await orderDAO.saveOrder(req);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.getAllOrdersOfSeller = async (sellerId) => {
  try {
    return await orderDAO.getAllOrdersOfSeller(
      ObjectId.isValid(sellerId) ? ObjectId(sellerId) : ObjectId()
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
};
