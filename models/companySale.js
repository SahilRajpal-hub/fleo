const mongoose = require("mongoose");

const companySaleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    childs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CompanySale",
      },
    ],
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CompanySale",
    },
    totalSale: {
      type: Number,
      required: true,
      default: 0,
    },
    targetSale: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timeStamps: true,
  }
);

const companySalesSchema = mongoose.model("CompanySale", companySaleSchema);

module.exports = companySalesSchema;
