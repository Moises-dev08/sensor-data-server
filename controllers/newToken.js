const jwt = require("jsonwebtoken");

const generateAccessToken = (email) => {
  const token = jwt.sign({ email }, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 60 * 24,
  }); // 24hs
  return token;
};

module.exports = generateAccessToken;
