const catelogServices = require("../services/catelogServices");

exports.createCatelog = async (req, res) => {
  try {
    const result = await catelogServices.createCatelog(req.body);
    if (result) res.json({ msg: "product added successfully" });
  } catch (err) {
    res.status(406).send({ msg: err, err: true });
  }
};

exports.getCatelogBySeller = async (req, res) => {
    try {
      const catelogDetails = await catelogServices.getCatelogBySeller(req.body.sellerId);
      res.json(catelogDetails);
   } catch (err) {
      res
        .status(406)
        .send({ msg: "Something went wrong...Please try again", err: err });
    }
  };