const express = require("express");
const router = express.Router();
const newClientController = require("../controllers/newClient");
const consts = require("../constant/const");

/* POST create a new client. */
router.post(consts.NEW_CLIENT_URL, newClientController.newClient);

module.exports = router;
