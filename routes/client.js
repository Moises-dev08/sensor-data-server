const express = require("express");
const router = express.Router();
const clientController = require("../controllers/client");
const consts = require("../constant/const");

/* POST create a new client. */
router.post(consts.NEW_CLIENT_URL, clientController.newClient);

/* PUT modify a client. */
router.put(consts.MODIFY_CLIENT_URL, clientController.modifyClient);

/* DELETE delete a client. */
router.delete(consts.DELETE_CLIENT_URL, clientController.deleteClient);

module.exports = router;
