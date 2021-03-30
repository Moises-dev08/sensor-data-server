const loginQuery = require("../querys/login");
const consts = require("../constant/const");

exports.login = async (req, res, next) => {
  const emailInput = req.body.email;
  const passwordInput = req.body.password;

  try {
    const email = await loginQuery.getUserByEmail(emailInput);
    const password = await loginQuery.getUserByPassword(passwordInput);

    if (email && password) {
      res.status(consts.SUCCESS_RESPONSE).send(email);
    } else {
      res.status(consts.FAILURE_500_RESPONSE).send({ ok: false });
    }
  } catch (err) {
    res.status(consts.FAILURE_500_RESPONSE).send({ okey: false });
  }
};