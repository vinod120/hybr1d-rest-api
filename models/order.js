const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Catelog",
    },
    quantity: {
      type: Number,
      min: 1,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
