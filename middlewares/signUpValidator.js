const { body } = require("express-validator");
const consts = require("../constant/const");
const { validationResult } = require("express-validator");

// This const is used for validate email and password fields when the user register
const fieldsValidator = (req, res, next) => {
  body("email").exists().isEmail().withMessage(consts.INVALID_EMAIL_OR_PASS),
    body("password")
      .isLength({ min: 6 })
      .withMessage(consts.INVALID_EMAIL_OR_PASS);

  next();
};

const signUpErrorValidator = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res
      .status(consts.FAILURE_400_RESPONSE)
      .json({ errors: validationErrors.array() });
  }
  next();
};

const signUpValidator = { fieldsValidator, signUpErrorValidator };

module.exports = signUpValidator;
