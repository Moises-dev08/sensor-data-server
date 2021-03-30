const db = require("../models");
const User = db.User;

exports.getUserByEmail = async (email) => {
  const registredEmail = await User.findOne({
    where: { email },
  });

  return registredEmail.dataValues.email;
};
exports.getUserByPassword = async (password) => {
  const registredPassword = await User.findOne({
    where: { password },
  });

  return registredPassword.dataValues.password;
};
