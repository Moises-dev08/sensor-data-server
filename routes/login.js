const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login");
const loginValidator = require("../middlewares/loginValidator");
const consts = require("../constant/const");

/* POST login with email and password. */
router.post(
  consts.LOGIN_URL,
  loginValidator.fieldsValidator,
  loginValidator.loginErrorValidator,
  loginController.login
);

module.exports = router;
