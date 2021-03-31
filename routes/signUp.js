const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signUp");
const signUpValidator = require("../middlewares/signUpValidator");
const consts = require("../constant/const");

/* POST - registrer user with email and password. */
router.post(
  consts.SIGNUP_URL,
  signUpValidator.fieldsValidator,
  signUpValidator.signUpErrorValidator,
  signUpController.signUp
);

module.exports = router;
