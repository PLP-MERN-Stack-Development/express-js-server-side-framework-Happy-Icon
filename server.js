require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(logger);
app.use(auth);

// Routes
app.use("/api/products", productRoutes);

// Error handling
app.use(errorHandler);

// Root route
app.get("/", (req, res) => {
  res.send("Hello World! Express + MongoDB API is running 🚀");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
