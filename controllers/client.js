const consts = require("../constant/const");

exports.newClient = async (req, res, next) => {
  try {
    const newClientData = req.body;

    if (newClientData) {
      res.status(consts.SUCCESS_RESPONSE).json({ ok: true });
    } else {
      res.status(consts.FAILURE_500_RESPONSE).send({ ok: false });
    }
  } catch (err) {
    res.status(consts.FAILURE_500_RESPONSE).send({ okey: false });
  }
};

exports.modifyClient = async (req, res, next) => {
  try {
    const newClientData = req.body;

    if (newClientData) {
      res.status(consts.SUCCESS_RESPONSE).json({ ok: true });
    } else {
      res.status(consts.FAILURE_500_RESPONSE).send({ ok: false });
    }
  } catch (err) {
    res.status(consts.FAILURE_500_RESPONSE).send({ okey: false });
  }
};

exports.deleteClient = async (req, res, next) => {
  try {
    const clientDataId = req.body;

    if (clientDataId) {
      res.status(consts.SUCCESS_RESPONSE).json({ ok: true });
    } else {
      res.status(consts.FAILURE_500_RESPONSE).send({ ok: false });
    }
  } catch (err) {
    res.status(consts.FAILURE_500_RESPONSE).send({ okey: false });
  }
};
