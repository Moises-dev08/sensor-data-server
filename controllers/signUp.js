const signUpQuery = require("../querys/signUp");
const consts = require("../constant/const");
const generateAccessToken = require("./newToken");

exports.signUp = async (req, res, next) => {
  try {
    const emailInput = req.body.email;
    const passwordInput = req.body.password;

    const token = await generateAccessToken(emailInput);

    const userExists = await signUpQuery.getUserByEmail(emailInput);

    if (userExists) {
      res.status(consts.FAILURE_500_RESPONSE).send({ ok: false });
    } else {
      const user = await signUpQuery.createNewUser(emailInput, passwordInput);
      res
        .status(consts.SUCCESS_RESPONSE)
        .json({ auth: true, token: token, email: user.email });
    }
  } catch (err) {
    res.status(consts.FAILURE_500_RESPONSE).send({ okey: false });
  }
};
