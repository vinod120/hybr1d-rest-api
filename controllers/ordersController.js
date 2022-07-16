const orderServices = require("../services/ordersServices");

exports.createOrder = async (req, res) => {
  try {
    const result = await orderServices.createOrder(req.body);
    if (result) res.json({ msg: "order created successfully" });
  } catch (err) {
    res.status(406).send({ msg: err, err: true });
  }
};
