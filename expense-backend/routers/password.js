const express = require("express");

const router = express.Router();

const forgetPassword = require("../controllers/password").forgetPassword;

router.post("/forgotpassword", forgetPassword);

module.exports = router;