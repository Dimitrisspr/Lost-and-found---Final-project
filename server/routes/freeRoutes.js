const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/register");
const loggedInUser = require("../controllers/login");


router.post("/login", loggedInUser);
router.post("/register", registerUser);


module.exports = router;
