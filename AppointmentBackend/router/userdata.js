const express = require("express");

const userDataController = require("../controller/usercontroller");

const router = express.Router();

router.post("/addData", userDataController.postUserDetail);

router.get("/getData", userDataController.getUserDetail);

router.delete("/deleteData/:id", userDataController.deleteUserDetail);

module.exports = router;
