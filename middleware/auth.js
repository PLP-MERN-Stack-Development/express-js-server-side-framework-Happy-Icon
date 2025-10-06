// middleware/auth.js

const auth = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  const validKey = process.env.API_KEY; // defined in .env file

  if (!apiKey || apiKey !== validKey) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or missing API key",
    });
  }

  next();
};

module.exports = auth;
