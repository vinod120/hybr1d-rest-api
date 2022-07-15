const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catelogSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Catelog", catelogSchema);
