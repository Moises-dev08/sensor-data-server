const db = require("../models");
const User = db.User;

exports.createNewUser = async (email, password) => {
  try {
    const user = await User.create(
      {
        email: email,
        password: password,
      },
      { fields: ["email", "password"] }
    );

    return user;
  } catch (err) {
    return err;
  }
};

exports.getUserByEmail = async (email) => {
  try {
    const registredEmail = await User.findOne({
      where: { email },
    });

    return registredEmail;
  } catch (err) {
    return err;
  }
};
