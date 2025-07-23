const express = require("express");
const { handleSendMail } = require("../controllers/mailsend");

const router = express.Router();

router.route("/").post(handleSendMail);

module.exports = router;
