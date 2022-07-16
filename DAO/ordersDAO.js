const Orders = require("../models/order");
const Sellers = require("../models/register");
const Product = require("../models/catalog");

exports.saveOrder = async (catelogData) => {
  try {
    const order = new Orders(catelogData);
    return await order.save();
  } catch (err) {
    throw err;
  }
};
