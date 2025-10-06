// middleware/validateProduct.js

const validateProduct = (req, res, next) => {
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields: name, description, price, and category.",
    });
  }

  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      success: false,
      message: "Price must be a positive number.",
    });
  }

  next();
};

module.exports = validateProduct;
