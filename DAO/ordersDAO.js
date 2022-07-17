const Orders = require("../models/order");
const Users = require("../models/register");
const Product = require("../models/catalog");

exports.saveOrder = async ({ productId, buyerId, quantity }) => {
  let user = await Users.findById({ _id: buyerId });
  let productDetails = await Product.findById({ _id: productId });
  try {
    if (user?.role === "seller") {
      throw "Unauthorized user";
    }
    const order = new Orders({
      product: productDetails,
      quantity: quantity,
      buyerId: buyerId,
    });
    return await order.save();
  } catch (err) {
    throw err;
  }
};

exports.getAllOrdersOfSeller = async (sellerId) => {
  try {
    const productDetails = await Orders.find({
      "product.sellerId": sellerId,
    }).populate({
      path: "buyerId",
      select: "_id username",
      model: Users,
    });
    return productDetails;
  } catch (err) {
    throw err;
  }
};
