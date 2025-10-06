const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    description: {
      type: String,
      required: [true, "Please enter a product description"],
    },
    price: {
      type: Number,
      required: [true, "Please enter a product price"],
    },
    category: {
      type: String,
      required: [true, "Please enter a category"],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
