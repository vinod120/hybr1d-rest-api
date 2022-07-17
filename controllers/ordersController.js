const order = require("../models/order");
const orderServices = require("../services/ordersServices");

exports.createOrder = async (req, res) => {
  try {
    const result = await orderServices.createOrder(req.body);
    if (result) res.json({ msg: "order created successfully" });
  } catch (err) {
    res.status(406).send({ msg: err, err: true });
  }
};

exports.getAllOrdersOfSeller = async (req, res) => {
  try {
    const productDetails = await orderServices.getAllOrdersOfSeller(
      req.body.sellerId
    );
    res.json(productDetails);
  } catch (err) {
    res
      .status(406)
      .send({ msg: "Something went wrong...Please try again", err: err });
  }
};

exports.deleteAll = async () => {
  await order.deleteMany();
};
