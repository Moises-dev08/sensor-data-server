const loginQuery = require("../querys/login");
const consts = require("../constant/const");
const generateAccessToken = require("./newToken");

exports.login = async (req, res, next) => {
  try {
    const emailInput = req.body.email;
    const passwordInput = req.body.password;

    const token = await generateAccessToken(emailInput);

    const email = await loginQuery.getUserByEmail(emailInput);
    const password = await loginQuery.getUserByPassword(passwordInput);

    if (email && password) {
      res
        .status(consts.SUCCESS_RESPONSE)
        .json({ auth: true, token: token, email: email });
    } else {
      res.status(consts.FAILURE_500_RESPONSE).send({ ok: false });
    }
  } catch (err) {
    res.status(consts.FAILURE_500_RESPONSE).send({ okey: false });
  }
};
