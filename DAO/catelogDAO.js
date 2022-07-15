const Catelog = require("../models/catalog");
const Sellers = require("../models/register");

exports.saveCatelog = async (catelogData) => {
  try {
    const catelog = new Catelog(catelogData);
    return await catelog.save();
  } catch (err) {
    throw err;
  }
};

exports.getCatelogBySeller = async (sellerId) => {
  try {
    const catelogDetails = await Catelog.find({ sellerId: sellerId }).populate({
      path: "sellerId",
      select: "_id, username",
      model: Sellers,
    });
    return catelogDetails;
  } catch (err) {
    throw err;
  }
};
